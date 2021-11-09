import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";

import InputField from "../components/InputField";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dashboard</title>
      </Head>
      <main>
        <Formik
          initialValues={{ name: "", email: "", password: "", country: "" }}
          onSubmit={async (values, { setErrors }) => {}}
        >
          <Form>
            <InputField label="Name" name="name" placeholder="name" />
            <InputField label="Email" name="email" placeholder="email" />
            <InputField
              label="Password"
              name="password"
              placeholder="password"
              type="password"
            />
            <Button type="submit">register</Button>
          </Form>
        </Formik>
      </main>
    </>
  );
};

export default Home;
