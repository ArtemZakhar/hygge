export const searchParamsKeys = {
  Q: 'q',
  PAGE: '_page',
  LIMIT: '_limit',
  SORT: '_sort',
  ORDER: '_order',
  START: '_start',
  END: '_end',
  SUBSCRIPTION: 'subscription',
  TAGS: 'tags',
  ID: 'id',
  THUMBNAIL: 'thumbnail.width',
  PRICE: 'price',
  GTE(context: string) {
    return `${context}_gte`;
  },
  LTE(context: string) {
    return `${context}_lte`;
  },
  NE(context: string) {
    return `${context}_ne`;
  },
  LIKE(context: string) {
    return `${context}_like`;
  },
};
