import { GetServerSideProps, NextPage } from "next";
import { getSession } from 'next-auth/react'

const Dashboard: NextPage = () => {
  return <section>
    <h1>Dashboard</h1>
  </section>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: session?.user
    }
  }
}

export default Dashboard