
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full gap-16">
      {children}
    </div>
  )
}

export default PageWrapper
