import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import DiscordProvider from 'next-auth/providers/discord';
import { compare } from 'bcrypt';

import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/backend/database';
import { UserModel } from '@/backend/models/plants';
export default NextAuth(
    {
        session: {
            strategy: 'jwt'
        },
        providers: [
            CredentialsProvider(
                {
                    name: 'User',
                    credentials: {
                        username: {
                            label: "Username",
                            type: "text",
                        },
                        password: {
                            label: "Password",
                            type: "password"
                        }
                    },
                    async authorize(credentials) {
                        // extract username, password from credentials
                        // provided by the user on the client side
                        const { username, password } = credentials;

                        // wait for db connection
                        const client = await clientPromise;
                        // get database
                        const database = client.setupClient(process.env.MONGODB_URI);

                        // we want the user collection
                        const userCollection = UserModel.find();
                        // find a user given the username
                        const user = await userCollection.findOne(
                            {
                                username
                            }
                        );

                        if (!user) {
                            return null;
                        }

                        // user.password is always encrpyted
                        const isValid = await compare(password, user.password);
                        if (!isValid) {
                            // when returning null, error will be displayed
                            // telling user to check details
                            return null;
                        }

                        console.log('user', JSON.stringify(user));
                        return {
                            id: user._id,
                            name: username,
                        };
                    }
                }
            ),
        ],
        callbacks: {
            async jwt({token, user, account}) {
                if (user) {
                    token.user = user;
                }
                return token;
            },
            async session({ session, token, user }) {
                // console.log('token', JSON.stringify(token));
                // console.log('user', JSON.stringify(user));
                if (token && token.user) {
                    session.user = token.user;
                }

                return session
            }
        }
    }
);