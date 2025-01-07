const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-[#fafafa] dark:bg-[#000000]">
      <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[linear-gradient(to_right,#ebebeb_1px,transparent_1px),linear-gradient(to_bottom,#ebebeb_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#171717_70%,transparent_100%)] dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#ededed_70%,transparent_100%)]"></div>
    </div>
  )
}

export default Background