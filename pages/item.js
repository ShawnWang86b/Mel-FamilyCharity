import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout.js/AppLayout";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";

export default function Item(props) {
  const toast = useToast();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        category: "",
        quantity: "",
        inventoryStatus: "",
        additionalInformation: "",
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
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/item`,
            values,
            config
          );

          toast({
            title: "Add Item info into system.",
            description: "We've added item info into the database.",
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
            title: "Item info added error.",
            description: "We've can't added Item info provided by you.",
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
      <h1 className="font-bold text-2xl py-5">Add an Item</h1>
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
              for="category"
            >
              Category
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Category"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="quantity"
            >
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="quantity"
              type="text"
              placeholder="Quantity"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="inventoryStatus"
            >
              Inventory status
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inventoryStatus"
              type="text"
              placeholder="Inventory status"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="additionalInformation"
            >
              Additional information
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additionalInformation"
              type="text"
              placeholder="Additional information"
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

Item.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
