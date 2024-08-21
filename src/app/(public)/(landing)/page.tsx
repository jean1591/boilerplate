import { PiCheck, PiX } from 'react-icons/pi'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="my-12">
      <div className="mt-24 md:mt-48">
        <div>
          <Hero />
        </div>

        <div className="mt-12">
          <CTA />
        </div>
      </div>

      <div id="features" className="mt-24 md:mt-32">
        <FeaturesCard />
      </div>

      <div id="pricing" className="mt-24 md:mt-32">
        <Pricing />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="text-center text-slate-800">
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
        <p>
          Weekly{' '}
          <span className="bg-green-800 px-2 text-white">meal plans</span>{' '}
        </p>
        <p>with ai-powered precision</p>
      </h1>

      {/* SUB-HEADING */}
      <div className="mt-8 flex items-center justify-center text-slate-600">
        <h2 className="w-full text-lg font-medium leading-relaxed md:w-3/4 md:text-lg">
          <p>
            Say goodbye to the overwhelm of meal planning. Effortlessly enjoy
            healthy, delicious meals tailored to your preferences, without the
            hassle.
          </p>
        </h2>
      </div>

      {/* KEY FEATURES */}
      <div className="mt-8 flex items-center justify-center text-slate-600">
        <ul className="list-none text-left font-medium">
          <li className="flex items-center justify-start gap-x-4">
            <PiCheck className="h-6 w-6 text-green-500" />
            <p>Time-Saving</p>
          </li>
          <li className="flex items-center justify-start gap-x-4">
            <PiCheck className="h-6 w-6 text-green-500" />
            <p>Diverse Recipes</p>
          </li>
          <li className="flex items-center justify-start gap-x-4">
            <PiCheck className="h-6 w-6 text-green-500" />
            <p>AI-Powered Personalization</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

const CTA = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-1/3">
        <CtaButton />
      </div>
    </div>
  )
}

const FeaturesCard = () => {
  return (
    <div>
      <p className="text-center text-3xl font-extrabold tracking-tight">
        Ready for effortless meal planning ?
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg border-[1px] border-red-700 bg-rose-100 p-8 text-red-700 md:p-12">
          <p className="text-lg font-bold">Without Foodr</p>

          <ul className="mt-4 list-none space-y-2 text-left text-sm font-semibold">
            <li className="flex items-center justify-start gap-x-4">
              <PiX className="h-4 w-4" />
              <p>Wasted Ingredients and Food</p>
            </li>
            <li className="flex items-center justify-start gap-x-4">
              <PiX className="h-4 w-4" />
              <p>Time-Consuming Meal Planning</p>
            </li>
            <li className="flex items-center justify-start gap-x-4">
              <PiX className="h-4 w-4" />
              <p>Inconsistent Nutrition</p>
            </li>
            <li className="flex items-center justify-start gap-x-4">
              <PiX className="h-4 w-4" />
              <p>Recipe Overwhelm</p>
            </li>
          </ul>
        </div>

        <div className="rounded-lg border-[1px] border-green-700 bg-green-100 p-8 text-green-700 md:p-12">
          <p className="text-lg font-bold">With Foodr</p>

          <ul className="mt-4 list-none space-y-2 text-left text-sm font-semibold">
            <li className="flex items-center justify-start gap-x-4">
              <PiCheck className="h-4 w-4" />
              <p>Personalized Meal Plans</p>
            </li>
            <li className="flex items-center justify-start gap-x-4">
              <PiCheck className="h-4 w-4" />
              <p>Time-Saving Convenience</p>
            </li>
            <li className="flex items-center justify-start gap-x-4">
              <PiCheck className="h-4 w-4" />
              <p>Nutritional Balance</p>
            </li>
            <li className="flex items-center justify-start gap-x-4">
              <PiCheck className="h-4 w-4" />
              <p>Effortless Recipe Discovery</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const Pricing = () => {
  return (
    <div>
      <p className="text-center text-3xl font-extrabold tracking-tight">
        Try for free
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <FreeTrialCard />
        <OneTimePaymentCard />
      </div>
    </div>
  )
}

const CtaButton = () => {
  return (
    <Link href="/login">
      <button className="w-full rounded-lg bg-green-800 p-4 font-bold text-white shadow-none hover:bg-green-900 hover:shadow-lg">
        Generate your weekly meals
      </button>
    </Link>
  )
}

const FreeTrialCard = () => {
  return (
    <div className="rounded-lg border-[1px] border-slate-500 bg-slate-50 p-8">
      <div className="flex items-baseline justify-start gap-x-2">
        <p className="text-5xl font-extrabold">Free</p>
      </div>

      <ul className="mt-8 list-none space-y-2 text-left font-medium">
        <li className="flex items-center justify-start gap-x-4">
          <PiCheck className="h-6 w-6 text-green-500" />
          <p>Unlimited parameters</p>
        </li>
        <li className="flex items-center justify-start gap-x-4">
          <PiCheck className="h-6 w-6 text-green-500" />
          <p>Grocery shopping list</p>
        </li>
        <li className="flex items-center justify-start gap-x-4">
          <PiCheck className="h-6 w-6 text-green-500" />
          <p>5 generations</p>
        </li>
      </ul>

      <div className="mt-16 w-full">
        {' '}
        <CtaButton />
      </div>
    </div>
  )
}

const OneTimePaymentCard = () => {
  return (
    <div className="rounded-lg border-[1px] border-slate-500 bg-slate-50 p-8">
      <div className="flex items-baseline justify-start gap-x-2">
        <p className="text-lg font-medium text-slate-600 line-through">18€</p>
        <p className="text-5xl font-extrabold">9€</p>
      </div>

      <ul className="mt-8 list-none space-y-2 text-left font-medium">
        <li className="flex items-center justify-start gap-x-4">
          <PiCheck className="h-6 w-6 text-green-500" />
          <p>Unlimited parameters</p>
        </li>
        <li className="flex items-center justify-start gap-x-4">
          <PiCheck className="h-6 w-6 text-green-500" />
          <p>Grocery shopping list</p>
        </li>
        <li className="flex items-center justify-start gap-x-4">
          <PiCheck className="h-6 w-6 text-green-500" />
          <p>
            10 generations <span className="bg-green-200 p-1">per day</span>
          </p>
        </li>
      </ul>

      <div className="mt-16 w-full">
        <CtaButton />
      </div>

      <p className="mt-4 text-center text-sm font-semibold text-slate-600">
        Pay it once, own it forever
      </p>
    </div>
  )
}
