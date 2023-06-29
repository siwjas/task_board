import NextAuth, { Account, NextAuthOptions, Profile, User } from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  // parametros para 'getServerSideProps'
  callbacks: { }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
