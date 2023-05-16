import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout.js";
import axios from "axios";
import { useFormik } from "formik";
import { useToast } from "@chakra-ui/react";

export default function NewPost(props) {
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
      address: "",
      familyMembers: "",
      partnerName: "",
      partnerAge: "",
      kidName: "",
      kidAge: "",
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
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipient`,
          values,
          config
        );

        toast({
          title: "Add recipient info into system.",
          description: "We've added recipient info into the database.",
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
          title: "Recipient info added error.",
          description: "We've can't added recipient info provided by you.",
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
      <h1 className="font-bold text-2xl py-5">Add a recipient</h1>
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
              for="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="familyMembers"
            >
              Family Members
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="familyMembers"
              type="text"
              placeholder="Family Members"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="partnerName"
            >
              Partner Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="partnerName"
              type="text"
              placeholder="Partner Name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="partnerAge"
            >
              Partner Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="partnerAge"
              type="text"
              placeholder="Partner Age"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="kidName"
            >
              Kid Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kidName"
              type="text"
              placeholder="Kid Name"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              for="kidAge"
            >
              Kid Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="kidAge"
              type="text"
              placeholder="Kid Age"
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

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
