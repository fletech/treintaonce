import { useWindowSize } from "@uidotdev/usehooks";

import { Drawer } from "vaul";

export function DrawerPortal({ children, ...props }) {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  const title = props.title;
  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-blackish/40 backdrop-blur-sm" />
      <Drawer.Content className="bg-bgHighlight flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-2 right-2 top-1 md:top-10 md:left-32 lg:left-32 md:right-32 lg:right-32 pt-4">
        <div className="p-4 bg-bgHighlight rounded-t-[10px] flex-1 overflow-auto">
          {isMobile && (
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-primary mb-8" />
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
          <div className="w-full mx-auto flex flex-col justify-center items-center">
            <h2 className=" font-bold text-2xl my-2 w-full text-blackish/80 uppercase text-center mb-10">
              {title}
            </h2>

            {children}
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  );
}
