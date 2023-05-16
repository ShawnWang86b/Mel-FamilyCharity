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

export default function ItemList(props) {
  //add axios
  const [itemData, setItemData] = useState([]);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/item`,
      config
    );
    console.log(data);
    setItemData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <h1 className="font-bold text-2xl py-5">Item list</h1>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Quantity</Th>
              <Th>Inventory Status</Th>
              <Th>Additional Information</Th>
            </Tr>
          </Thead>
          <Tbody>
            {itemData.map((oneItem) => (
              <Tr key={oneItem._id}>
                <Td>{oneItem.name}</Td>
                <Td>{oneItem.category}</Td>
                <Td>{oneItem.quantity}</Td>
                <Td>{oneItem.inventoryStatus}</Td>
                <Td>{oneItem.additionalInformation}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

ItemList.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
