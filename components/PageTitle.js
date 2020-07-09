import React from 'react'
import Head from "next/head";

const PageTitle = ({ title }) => {
  return(
    <Head>
      <h1>{title} - Palpite Box</h1>
    </Head>
  )
}

export default PageTitle;