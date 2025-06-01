import { useState } from 'react';

import { RefreshCcw, ShoppingBasket, ShoppingCart } from 'lucide-react';

import { Product } from '../../../../../types/products';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({
  product: {
    image_src,
    title,
    vendor,
    option_value,
    url,
    tags,
    price,
    subscription,
    subscription_discount,
  },
}: ProductItemProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="h-86 w-72 bg-gray-50 rounded-lg overflow-hidden hover:shadow-xl hover:bg-white transition-box-shadow duration-500">
      <div className="h-52 w-[100%] bg-text-primary flex items-center justify-center">
        {imageError ? (
          <ShoppingBasket
            aria-label={`Icon fallback for ${title} image`}
            className="w-[60%] h-[60%] text-white  "
          />
        ) : (
          <img
            src={image_src}
            alt={`${title} image`}
            loading="lazy"
            className="object-cover h-full w-full"
            onError={(e) => {
              e.stopPropagation();
              setImageError(true);
            }}
          />
        )}
      </div>

      <div className="px-4 py-4 flex flex-col gap-2 ">
        <div className="flex flex-row items-center gap-3 text-xs">
          <p>{vendor}</p>

          <div className="w-[1px] h-3 bg-text-primary" />

          <p>{option_value}</p>
        </div>
        <a href={url} className="hover:underline" target="_blank">
          {title}
        </a>

        <div className="flex gap-2 text-xs">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <p className="text-xl font-[700]">{`$${price}`}</p>
          <span className="text-sm text-gray-500">{`/ pack`}</span>
        </div>

        <div className="min-h-[1.375rem]">
          {subscription && (
            <div className="flex items-center gap-3">
              <div
                className="flex items-center
            gap-2 px-1 py-[1px] grow rounded-lg bg-text-primary text-white"
              >
                <RefreshCcw className="w-4 h-4 " />

                <button className="text-sm">Subscription available</button>
              </div>

              <p className="text-sm text-gray-500">{`Sale ${subscription_discount}%`}</p>
            </div>
          )}
        </div>

        <button
          className="flex items-center justify-center
            gap-3 px-3 py-3 grow rounded-lg bg-text-primary text-white text-xl font-[700]"
        >
          <ShoppingCart /> <p>Add to cart</p>
        </button>
      </div>
    </article>
  );
};

export default ProductItem;
