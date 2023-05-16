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

export default function KitList(props) {
  //add axios
  const [kitData, setKitData] = useState([]);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/kit`,
      config
    );
    console.log(data);
    setKitData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Kit list</h1>
      {/* Table */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Composition 1</Th>
              <Th>Quantity 1</Th>
              <Th>Composition 2</Th>
              <Th>Quantity 2</Th>
              <Th>Composition 3</Th>
              <Th>Quantity 3</Th>
            </Tr>
          </Thead>
          <Tbody>
            {kitData.map((oneKit) => (
              <Tr key={oneKit._id}>
                <Td>{oneKit.name}</Td>
                <Td>{oneKit.composition1}</Td>
                <Td>{oneKit.quantity1}</Td>
                <Td>{oneKit.composition2}</Td>
                <Td>{oneKit.quantity2}</Td>
                <Td>{oneKit.composition3}</Td>
                <Td>{oneKit.quantity3}</Td>
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

KitList.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
