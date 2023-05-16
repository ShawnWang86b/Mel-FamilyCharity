import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout.js/AppLayout";
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

export default function DonorList(props) {
  //add axios
  const [donorData, setDonorData] = useState([]);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/donor`,
      config
    );

    console.log(data);
    setDonorData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Donor list</h1>
      {/* Table */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Mailing Address</Th>
              <Th>Phone</Th>
              <Th>Mobile</Th>
              <Th>Email</Th>
              <Th>Organization Name</Th>
              <Th>Headquarter</Th>
              <Th>Contact Person</Th>
              <Th>Identity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {donorData.map((oneDonor) => (
              <Tr key={oneDonor._id}>
                <Td>{oneDonor.name}</Td>
                <Td>{oneDonor.age}</Td>
                <Td>{oneDonor.mailingAddress}</Td>
                <Td>{oneDonor.phone}</Td>
                <Td>{oneDonor.mobile}</Td>
                <Td>{oneDonor.email}</Td>
                <Td>{oneDonor.organizationName}</Td>
                <Td>{oneDonor.headquarter}</Td>
                <Td>{oneDonor.contactPerson}</Td>
                <Td>{oneDonor.identity}</Td>
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

DonorList.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
