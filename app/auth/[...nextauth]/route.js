import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
console.log('called')
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const {email, password} = credentials;
        try {
          const {data} = axios.post('/auth/sign-in', {
            username: email,
            password: password
          });
          return data
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: 'secretaryship',
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
