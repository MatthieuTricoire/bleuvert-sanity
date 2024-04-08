import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import photographer from "./schemaTypes/photographer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, blockContent, photographer],
};
