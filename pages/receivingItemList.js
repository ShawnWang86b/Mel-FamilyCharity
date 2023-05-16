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

export default function ReceivingItemList(props) {
  //add axios
  const [receivingItemData, setReceivingItemData] = useState([]);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/receivingItem`,
      config
    );
    console.log(data);
    setReceivingItemData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Receiving item list</h1>
      {/* Table */}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ReceivingItem</Th>
              <Th>Item</Th>
              <Th>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {receivingItemData.map((oneReceivingItem) => (
              <Tr key={oneReceivingItem._id}>
                <Td>{oneReceivingItem.donor}</Td>
                <Td>{oneReceivingItem.item}</Td>
                <Td>{oneReceivingItem.quantity}</Td>
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

ReceivingItemList.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
