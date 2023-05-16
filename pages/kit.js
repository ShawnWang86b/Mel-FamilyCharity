import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout.js/AppLayout";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";

export default function Kit(props) {
  const toast = useToast();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        composition: "",
      },

      onSubmit: async (values) => {
        try {
          //add axios
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/kit`,
            values,
            config
          );

          toast({
            title: "Add kit info into system.",
            description: "We've added kit info into the database.",
            status: "success",
            duration: 9000,
            isClosable: true,
            containerStyle: {
              fontSize: "20px",
              maxWidth: "400px",
              padding: "10px",
            },
          });
        } catch (error) {
          toast({
            title: "Kit info added error.",
            description: "We've can't added Kit info provided by you.",
            status: "error",
            duration: 9000,
            isClosable: true,
            containerStyle: {
              fontSize: "20px",
              maxWidth: "400px",
              padding: "10px",
            },
          });
        }
      },
    });
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Add a kit</h1>
      <div className="w-[1000px]">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="composition1"
            >
              Composition 1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="composition1"
              type="text"
              placeholder="Composition 1"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="quantity1"
            >
              Quantity 1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity1"
              type="text"
              placeholder=" Quantity 1"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="composition2"
            >
              Composition 2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="composition2"
              type="text"
              placeholder="Composition 2"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="quantity2"
            >
              Quantity 2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity2"
              type="text"
              placeholder=" Quantity 2"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="composition3"
            >
              Composition 3
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="composition3"
              type="text"
              placeholder="Composition 3"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="quantity3"
            >
              Quantity 3
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity3"
              type="text"
              placeholder=" Quantity 3"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end pt-5">
            <button className="btn w-1/3" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Kit.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
