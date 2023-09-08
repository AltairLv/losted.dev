import { ImageResponse } from "next/server";

export const runtime = "edge";

export const size = {
  width: 1920,
  height: 1080,
};

export default async function Image({ params }: { params: { slug: string } }) {
  const kaiseiTokumin = fetch(
    new URL("/public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          backgroundImage: "url(https://losted.dev/og-generate.jpg)",
        }}
      >
        <div
          style={{
            marginTop: 500,
            marginLeft: 210,
            marginRight: 210,
            display: "flex",
            fontSize: 144,
            fontFamily: "Kaisei Tokumin",
            fontWeight: "bold",
            letterSpacing: "-0.05em",
            fontStyle: "normal",
            color: "white",
            lineHeight: "120px",
            whiteSpace: "pre-wrap",
          }}
        >
          {params.slug}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: await kaiseiTokumin,
          style: "normal",
        },
      ],
    }
  );
}
