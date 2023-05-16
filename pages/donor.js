import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout.js/AppLayout";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";

export default function Donor(props) {
  const toast = useToast();
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      age: "",
      mailingAddress: "",
      phone: "",
      mobile: "",
      email: "",
      organizationName: "",
      headquarter: "",
      contactPerson: "",
      identity: "",
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
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/donor`,
          { ...values },
          config
        );

        toast({
          title: "Add Donor info into system.",
          description: "We've added donor info into the database.",
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
          title: "Donor info added error.",
          description: "We've can't added Donor info provided by you.",
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

  //upload image
  const postDetials = (identity) => {
    if (identity === undefined) {
      toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }
    if (identity.type === "image/jpeg" || identity.type === "image/png") {
      const data = new FormData();
      data.append("file", identity);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dmfmwtxje");
      fetch(`https://api.cloudinary.com/v1_1/dmfmwtxje/image/upload`, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setFieldValue("identity", data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "Please Select an Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Add a donor</h1>
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
              for="age"
            >
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              placeholder="Age"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="mailingAddress"
            >
              Mailing address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mailingAddress"
              type="text"
              placeholder="Mailing Address"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="mobile"
            >
              Mobile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="text"
              placeholder="Mobile"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="organizationName"
            >
              Organization Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="organizationName"
              type="text"
              placeholder="Organization Name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="headquarter"
            >
              Headquarter
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="headquarter"
              type="text"
              placeholder="Headquarter"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="contactPerson"
            >
              Contact Person
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contactPerson"
              type="text"
              placeholder="Contact Person"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="identity"
            >
              Identity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="identity"
              type="file"
              placeholder="Identity"
              onChange={(e) => {
                postDetials(e.target.files[0]);
              }}
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

Donor.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
