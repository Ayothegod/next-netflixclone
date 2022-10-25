import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions)
// const session = await getSession({req})
  console.log(session)
  if (session) {
    res.send(session.user)
  } else {
    res.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}