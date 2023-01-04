// import sanityClient from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

// const client = sanityClient({
//   projectId: "hajkb63n",
//   dataset: "production",
//   useCdn: true,
// });

// const builder = ImageUrlBuilder(client)
// export const urlFor = source => builder.image(source)

// export default client
import imageUrlBuilder from "@sanity/image-url";


const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "hajkb63n",
  dataset: "production",
  apiVersion: '2021-10-21',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
export default client;
