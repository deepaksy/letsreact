/** type declaration for svg import support in typescript {declaration used in tsconfig.json} */
declare module "*.svg" {
    const content: string;
    export default content;
  }
