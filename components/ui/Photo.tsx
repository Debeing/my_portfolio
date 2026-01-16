import Image from "next/image";

export default function Member() {
  const memberImage: {file: string, alt:string}[] = [
    {
      file: "/image/ChatGPTImage8janv.2026,07_06_30.png",
      alt: ""
    },
    {
      file: "/image/ChatGPTImage8janv.2026,07_06_30.png",
      alt: ""
    },
    {
      file: "/image/ChatGPTImage8janv.2026,07_06_30.png",
      alt: ""
    },
    {
      file: "/image/ChatGPTImage8janv.2026,07_06_30.png",
      alt: ""
    },
    {
      file: "/image/ChatGPTImage8janv.2026,07_06_30.png",
      alt: ""
    },
    {
      file: "/image/ChatGPTImage8janv.2026,07_06_30.png",
      alt: ""
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-3 lg:px-8 flex gap-2 h-[362px] flex-nowrap overflow-auto no-scrollbar mt-28 box-border">
      {
        memberImage.map(({ file, alt }, index) => {
          return (
            <div key={index} className="shrink-0 w-[300px] h-full">
              <Image
                src={file}
                alt={alt}
                width={300}
                height={362}
                className="w-full h-full rounded-3xl object-cover" 
              />
            </div>
          )
        })
      }
        </div>
    );
}