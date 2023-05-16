import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout.js/index.js";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function RecipientList(props) {
  //add axios
  const [recipientData, setRecipientData] = useState([]);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipient`,
      config
    );
    console.log(data);
    setRecipientData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Recipient list</h1>
      {/* Table */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Address</Th>
              <Th>Family Members</Th>
              <Th>Partner Name</Th>
              <Th>Partner Age</Th>
              <Th>Kid Name</Th>
              <Th>Kid Age</Th>
              <Th>Identity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {recipientData.map((oneRecipient) => (
              <Tr key={oneRecipient._id}>
                <Td>{oneRecipient.name}</Td>
                <Td>{oneRecipient.age}</Td>
                <Td>{oneRecipient.address}</Td>
                <Td>{oneRecipient.familyMembers}</Td>
                <Td>{oneRecipient.partnerName}</Td>
                <Td>{oneRecipient.partnerAge}</Td>
                <Td>{oneRecipient.kidName}</Td>
                <Td>{oneRecipient.kidAge}</Td>
                <Td>{oneRecipient.identity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* header */}

      {/* content of list */}
    </div>
  );
}

RecipientList.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
