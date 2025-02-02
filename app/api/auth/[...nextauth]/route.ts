import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";  // Import axios

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            "https://mohasel.net/api/Client/Auth/Login", 
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // Access response data directly from axios response object
          const data = response.data;

          if (response.status === 200 && data.token) {
            return {
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              token: data.token,
              refreshToken: data.refreshToken,
            };
          } else {
            throw new Error(data.title || "Invalid email or password");
          }
        } catch (error) {
          console.error("Authorization Error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],

  session: {
    strategy: "jwt", // Use JWT for session management
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  },

  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Enable Secure flag in production
        sameSite: "lax",
        path: "/", // Ensure the cookie is accessible across the entire app
      },
    },
  },

  callbacks: {
    async jwt({ token, user }) {
      // Add the user token and refresh token to the JWT
      if (user) {
        token.accessToken = user.token;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      // Add the token and refresh token to the session object
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },

  // Enable debug mode for development
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
