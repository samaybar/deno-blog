/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_: Request, ctx: HandlerContext) {
    const files: string[] = []
    for await (const dirEntry of Deno.readDir("./posts")) {
      const file = dirEntry.name;
      files.push(file.split(".")[0]);
    }
    console.log("Files", files)
    return await ctx.render({files});
  }
}

export default function Home({data}: PageProps) {
  const {files} = data;
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1>Posts</h1>
      <div>
        <ul class={tw`list-disc`}>
          {
            files.map((file:string ) => {
              const linkText = file.replace("_", " ");
              const capText = linkText[0].toLocaleUpperCase() + linkText.substring(1);
              return (<li><a class={tw`text-xl`} href={`/${file}`}>{capText}</a></li>)
            })
          }
        </ul>
      </div>
    </div>
  );
}
