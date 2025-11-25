const MutedText = ({ text }: { text: string }) => {
  return (
    <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{text}</div>
  )
}

export default MutedText;