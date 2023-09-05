import { isMobile } from "react-device-detect";
import { Drawer } from "vaul";

export function MyDrawer({ children, ...props }) {
  const title = props.title;
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-blackish/50" />
      <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-2 right-2 top-2 md:top-14 md:left-40 lg:left-40 md:right-40 lg:right-40">
        <div className="p-4 bg-bgHighlight rounded-t-[10px] flex-1">
          {isMobile && (
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-primary/40 mb-8" />
          )}
          {!isMobile && (
            <div className="flex mx-auto w-full mb-8">
              <p className="text-blackish/70 mx-auto flex items-center font-light">
                Presiona
                <span className="mx-2 rounded bg-white/40 text-[10px] font-normal text-blackish border-[0.3px] border-blackish/60 py-1 px-[6px] shadow">
                  ESC
                </span>
                para cerrar
              </p>
            </div>
          )}
          <div className="max-w-md mx-auto flex flex-col justify-center items-center">
            <h2 className=" font-bold text-2xl my-2 w-full text-blackish/80 uppercase ">
              {title}
            </h2>

            {children}
          </div>
        </div>
        {/* <div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
          <div className="flex gap-6 justify-end max-w-md mx-auto"></div>
        </div> */}
      </Drawer.Content>
    </Drawer.Portal>
  );
}
