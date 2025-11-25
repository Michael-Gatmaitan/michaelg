"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowUpRight } from 'lucide-react'
import { FormEvent, useState } from 'react'

interface SubmitStatusType {
  type: 'success' | 'error' | null;
  message: string
}


const EmailForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatusType>({ type: null, message: '' })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch(`/api/sendEmail`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send email' })
        return
      }

      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
    } catch {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-4 rounded-2xl border border-border/60 bg-background/70 p-5" method="POST" onSubmit={onSubmit}>
      <div>
        <label className="text-sm text-muted-foreground" htmlFor="name">
          Name
        </label>
        <Input id="name" name="name" placeholder="How should I address you?" className="mt-2" required />
      </div>
      <div>
        <label className="text-sm text-muted-foreground" htmlFor="email">
          Work email
        </label>
        <Input id="email" name="email" type="email" placeholder="you@company.com" className="mt-2" required />
      </div>
      <div>
        <label className="text-sm text-muted-foreground" htmlFor="message">
          Project notes
        </label>
        <Textarea id="message" name="message" placeholder="Timeline, scope, context…" className="mt-2" required />
      </div>
      {submitStatus.type && (
        <div className={`rounded-lg p-3 text-sm ${submitStatus.type === 'success'
          ? 'bg-green-500/10 text-green-600 dark:text-green-400'
          : 'bg-red-500/10 text-red-600 dark:text-red-400'
          }`}>
          {submitStatus.message}
        </div>
      )}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send message'}
        {!isSubmitting && <ArrowUpRight className="size-4" />}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Or drop a line at <span className="font-medium text-foreground">mchlgtmtn@gmail.com</span>
      </p>
    </form>
  )
}

export default EmailForm
