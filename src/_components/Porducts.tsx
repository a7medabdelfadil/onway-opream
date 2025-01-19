import Button from "./Button";
import { Text } from "./Text";
import { FaStar, FaPlus } from "react-icons/fa6";

/* eslint-disable @next/next/no-img-element */
const Products = ({ products }: { products?: any }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
        {products?.length > 0 ? (
          products.map((product: any) => (
            <div
              key={product.id}
              className="flex w-full overflow-hidden rounded border border-borderPrimary py-2 shadow"
            >
              <div>
                <img
                  src={product.productPhoto}
                  alt="product Photo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <Text font={"semiBold"} size={"lg"} color={"gray"}>
                  CATEGORY
                </Text>
                <Text font={"bold"} size={"2xl"} className="mt-2">
                  {product.name}
                </Text>
                <Text
                  font={"medium"}
                  size={"md"}
                  color={"gray"}
                  className="mt-2"
                >
                  {product.description}
                </Text>
                <div className="my-4 flex flex-col gap-4 md:flex-row md:justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={product.productOwnerPhoto}
                      alt="productOwnerPhoto"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <Text font={"medium"} size={"md"} color={"gray"}>
                      {product.productOwner}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar color="yellow" className="text-xl" />
                    <Text font={"medium"} size={"md"} color={"gray"}>
                      ({product.reviews} Reviews)
                    </Text>
                  </div>
                </div>
                <div className="my-4 flex flex-col gap-4 sm:flex-row sm:justify-between">
                  <div className="flex justify-center">
                    <Button color="primary" className="w-full sm:w-auto">
                      Buy Now
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Button theme="outline" className="w-full sm:w-auto">
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">No items in the cart.</div>
        )}
      </div>
    </>
  );
};

export default Products;
