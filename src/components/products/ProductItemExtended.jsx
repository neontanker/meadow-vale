import { useQueryClient } from "react-query";
import Modal from "../ui/Modal.jsx";
import Card from "../ui/Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating.jsx";

const ProductItemExtended = ({ id, onClick }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("products");

  const product = data.find((item) => item.id === id);

  let content = "";
  if (product) {
    content = (
      <>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 h-96">
          <img
            src={product.image}
            alt="Hand holding black machined steel mechanical pencil with brass tip and top."
            className="h-full w-full object-contain object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className=" text-lg font-bold text-gray-700">{product.title}</h3>
          <div className="table justify-center align-middle">
            <StarRating rating={Math.round(product.rating.rate)} />
            <p className="table-cell align-middle text-sm">
              {product.rating.count}
            </p>
          </div>
        </div>
        <p>{product.description}</p>
        <div className="flex justify-between mt-auto">
          <p className="mt-1 text-lg font-medium text-gray-900">
            {product.category}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-900">
            £{product.price}
          </p>
        </div>
      </>
    );
  }

  return (
    <Modal onClick={onClick}>
      <Card>
        <FontAwesomeIcon
          icon={faX}
          onClick={onClick}
          className="cursor-pointer right-4 top-4 absolute"
        />
        {content}
      </Card>
    </Modal>
  );
};

export default ProductItemExtended;
