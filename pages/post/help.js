import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Requisition(props) {
  const toast = useToast();
  const router = useRouter();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        item: "",
        quantity: "",
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
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/requisition`,
            values,
            config
          );

          toast({
            title: "Add requisition info into system.",
            description: "We've sent requisition email to admin's email.",
            status: "success",
            duration: 9000,
            isClosable: true,
            containerStyle: {
              fontSize: "20px",
              maxWidth: "400px",
              padding: "10px",
            },
          });
          router.push("/");
        } catch (error) {
          toast({
            title: "Requisition info added error.",
            description: "We've can't added requisition info provided by you.",
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
      <h1 className="font-bold text-2xl py-5">Requisition</h1>
      <div className="w-[1000px]">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="recipientName"
            >
              Recipient Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="recipientName"
              type="text"
              placeholder="Recipient Name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="item"
            >
              Item
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="item"
              type="text"
              placeholder="Item"
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
