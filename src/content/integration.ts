import type { Course } from './types'

/**
 * Integration course outline aligned with the Mathematical Analysis
 * indefinite-integral chapter plan (exercises 1.4–1.120).
 */
export const integrationCourse: Course = {
  id: 'integration',
  brand: 'Mathh',
  title: 'Integration',
  subtitle:
    'A calm, step-by-step path through the ideas first-time learners meet when they start integrating.',
  topic: 'Calculus · Antiderivatives & definite integrals',
  chapters: [
    {
      id: "introduction-theory",
      number: 1,
      title: "Introduction to Integration Theory",
      description: "Primitive functions, the indefinite integral, and the basic table of antiderivatives.",
      exercises: "1.4–1.14",
      sections: [
        {
          id: "basics",
          title: "Primitive functions & the basic table",
          summary: "Apply the power rule and elementary antiderivative formulas, always including $+C$.",
          examples: [
            {
              id: "1.4",
              title: "Power rule for $x^5$",
              prompt: "Evaluate $\\displaystyle \\int x^{5}\\,dx$.",
              goal: "Apply the power rule from the basic table.",
              steps: [
                {
                  id: "s1",
                  title: "Recall the power rule",
                  why: "For $n\\neq -1$, integrating $x^n$ raises the exponent by one and divides by the new exponent.",
                  formula: "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)",
                },
                {
                  id: "s2",
                  title: "Substitute $n=5$",
                  why: "Here the exponent is $5$, so the antiderivative is $\\frac{x^{6}}{6}$.",
                  calculation: "\\int x^{5}\\,dx = \\frac{x^{6}}{6}+C",
                },
                {
                  id: "s3",
                  title: "Optional check",
                  why: "Differentiate the answer: $\\frac{d}{dx}\\bigl(\\frac{x^{6}}{6}\\bigr)=x^{5}$.",
                  notes: "Always keep $+C$ for an indefinite integral.",
                },
              ],
            },
            {
              id: "1.5",
              title: "Negative power $x^{-2}$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{1}{x^{2}}\\,dx$.",
              goal: "Rewrite as a power and apply the power rule.",
              steps: [
                {
                  id: "s1",
                  title: "Rewrite the integrand",
                  why: "Write $\\frac{1}{x^{2}}$ as $x^{-2}$ so the power rule applies directly.",
                  calculation: "\\frac{1}{x^{2}} = x^{-2}",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "Use $n=-2$: raise to $-1$ and divide by $-1$.",
                  formula: "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C",
                  calculation: "\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1}+C = -\\frac{1}{x}+C",
                },
                {
                  id: "s3",
                  title: "Check by differentiation",
                  why: "$\\frac{d}{dx}\\bigl(-x^{-1}\\bigr)=x^{-2}=\\frac{1}{x^{2}}$.",
                },
              ],
            },
            {
              id: "1.6",
              title: "Integrating $x^{-3/2}$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{1}{x\\sqrt{x}}\\,dx$.",
              goal: "Express the root as a fractional power, then integrate.",
              steps: [
                {
                  id: "s1",
                  title: "Convert to a single power",
                  why: "$x\\sqrt{x}=x\\cdot x^{1/2}=x^{3/2}$, so the integrand is $x^{-3/2}$.",
                  calculation: "\\frac{1}{x\\sqrt{x}} = x^{-3/2}",
                },
                {
                  id: "s2",
                  title: "Apply the power rule",
                  why: "$n=-\\tfrac32$: new exponent is $-\\tfrac12$; divide by $-\\tfrac12$.",
                  calculation: "\\int x^{-3/2}\\,dx = \\frac{x^{-1/2}}{-1/2}+C = -2x^{-1/2}+C = -\\frac{2}{\\sqrt{x}}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int \\frac{1}{x\\sqrt{x}}\\,dx = -\\frac{2}{\\sqrt{x}}+C$.",
                },
              ],
            },
            {
              id: "1.7",
              title: "Sum with $1/x$",
              prompt: "Evaluate $\\displaystyle \\int \\Bigl(\\frac{1}{x}-3\\Bigr)\\,dx$.",
              goal: "Use linearity and the logarithm formula.",
              steps: [
                {
                  id: "s1",
                  title: "Split the integral",
                  why: "Integrate each term separately.",
                  calculation: "\\int\\Bigl(\\frac{1}{x}-3\\Bigr)\\,dx = \\int\\frac{1}{x}\\,dx - 3\\int 1\\,dx",
                },
                {
                  id: "s2",
                  title: "Apply standard formulas",
                  why: "$\\int\\frac{1}{x}\\,dx=\\ln|x|$ and $\\int 1\\,dx=x$.",
                  calculation: "\\ln|x| - 3x + C",
                },
                {
                  id: "s3",
                  title: "Write the final answer",
                  why: "$\\displaystyle \\int\\bigl(\\frac{1}{x}-3\\bigr)\\,dx = \\ln|x|-3x+C$.",
                },
              ],
            },
            {
              id: "1.8",
              title: "Algebraic rewrite of an exponential quotient",
              prompt: "Evaluate $\\displaystyle \\int \\frac{e^{2x}-1}{e^{x}+1}\\,dx$.",
              goal: "Simplify the fraction before integrating.",
              steps: [
                {
                  id: "s1",
                  title: "Factor the numerator",
                  why: "$e^{2x}-1=(e^{x}-1)(e^{x}+1)$.",
                  calculation: "\\frac{e^{2x}-1}{e^{x}+1} = \\frac{(e^{x}-1)(e^{x}+1)}{e^{x}+1} = e^{x}-1",
                },
                {
                  id: "s2",
                  title: "Integrate the simplified form",
                  why: "Now the integral is elementary.",
                  calculation: "\\int(e^{x}-1)\\,dx = e^{x}-x+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{e^{2x}-1}{e^{x}+1}\\,dx = e^{x}-x+C$.",
                },
              ],
            },
            {
              id: "1.9",
              title: "Exponential with base $5/3$",
              prompt: "Evaluate $\\displaystyle \\int 5^{x}3^{-x}\\,dx$.",
              goal: "Combine bases, then use $\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}+C$.",
              steps: [
                {
                  id: "s1",
                  title: "Combine the bases",
                  why: "$5^{x}3^{-x}=(5/3)^{x}$.",
                  calculation: "5^{x}3^{-x} = \\Bigl(\\frac{5}{3}\\Bigr)^{x}",
                },
                {
                  id: "s2",
                  title: "Integrate the exponential",
                  why: "For $a>0$, $a\\neq 1$: $\\int a^{x}\\,dx=\\frac{a^{x}}{\\ln a}+C$.",
                  formula: "\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}+C",
                  calculation: "\\int\\Bigl(\\frac{5}{3}\\Bigr)^{x}\\,dx = \\frac{(5/3)^{x}}{\\ln(5/3)}+C = \\frac{5^{x}}{3^{x}\\ln(5/3)}+C",
                },
                {
                  id: "s3",
                  title: "Equivalent form",
                  why: "Since $\\ln(5/3)=\\ln 5-\\ln 3$, you may also write $\\frac{5^{x}}{3^{x}(\\ln 5-\\ln 3)}+C$.",
                },
              ],
            },
            {
              id: "1.10",
              title: "Linearity on a sum",
              prompt: "Evaluate $\\displaystyle \\int\\bigl(2-3\\sin x+\\cos x\\bigr)\\,dx$.",
              goal: "Split and integrate each term with the basic table.",
              steps: [
                {
                  id: "s1",
                  title: "Use linearity",
                  why: "The integral of a sum is the sum of the integrals.",
                  calculation: "\\int(2-3\\sin x+\\cos x)\\,dx = \\int 2\\,dx - 3\\int\\sin x\\,dx + \\int\\cos x\\,dx",
                },
                {
                  id: "s2",
                  title: "Integrate each piece",
                  why: "$\\int 2\\,dx=2x$, $\\int\\sin x\\,dx=-\\cos x$, $\\int\\cos x\\,dx=\\sin x$.",
                  calculation: "2x + 3\\cos x + \\sin x + C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int(2-3\\sin x+\\cos x)\\,dx = 2x+3\\cos x+\\sin x+C$.",
                },
              ],
            },
            {
              id: "1.11",
              title: "Integrating $\\\\tan^{2}x$",
              prompt: "Evaluate $\\displaystyle \\int \\tan^{2}x\\,dx$.",
              goal: "Use $1+\\tan^{2}x=\\sec^{2}x$ to reduce to a table integral.",
              steps: [
                {
                  id: "s1",
                  title: "Rewrite with a Pythagorean identity",
                  why: "$\\tan^{2}x=\\sec^{2}x-1$.",
                  formula: "1+\\tan^{2}x=\\sec^{2}x",
                  calculation: "\\tan^{2}x = \\sec^{2}x - 1",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int\\sec^{2}x\\,dx=\\tan x$ and $\\int 1\\,dx=x$.",
                  calculation: "\\int(\\sec^{2}x-1)\\,dx = \\tan x - x + C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\tan^{2}x\\,dx = \\tan x - x + C$.",
                },
              ],
            },
            {
              id: "1.12",
              title: "Integrating $\\\\cot^{2}x$",
              prompt: "Evaluate $\\displaystyle \\int \\cot^{2}x\\,dx$.",
              goal: "Use $1+\\cot^{2}x=\\csc^{2}x$.",
              steps: [
                {
                  id: "s1",
                  title: "Rewrite",
                  why: "$\\cot^{2}x=\\csc^{2}x-1$.",
                  calculation: "\\cot^{2}x = \\csc^{2}x - 1",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int\\csc^{2}x\\,dx=-\\cot x$.",
                  calculation: "\\int(\\csc^{2}x-1)\\,dx = -\\cot x - x + C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\cot^{2}x\\,dx = -\\cot x - x + C$.",
                },
              ],
            },
            {
              id: "1.13",
              title: "Rewrite $\\\\frac{x^{2}}{1+x^{2}}$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{x^{2}}{1+x^{2}}\\,dx$.",
              goal: "Algebraically rewrite so an arctangent appears.",
              steps: [
                {
                  id: "s1",
                  title: "Split the fraction",
                  why: "Write the numerator as $(1+x^{2})-1$.",
                  calculation: "\\frac{x^{2}}{1+x^{2}} = 1 - \\frac{1}{1+x^{2}}",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int 1\\,dx=x$ and $\\int\\frac{1}{1+x^{2}}\\,dx=\\arctan x$.",
                  calculation: "x - \\arctan x + C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{x^{2}}{1+x^{2}}\\,dx = x-\\arctan x+C$.",
                },
              ],
            },
            {
              id: "1.14",
              title: "Arcsine minus a hyperbolic-style log",
              prompt: "Evaluate $\\displaystyle \\int\\Bigl(\\frac{3}{\\sqrt{1-x^{2}}}-\\frac{1}{\\sqrt{1+x^{2}}}\\Bigr)\\,dx$.",
              goal: "Recognize two standard table integrals.",
              steps: [
                {
                  id: "s1",
                  title: "Split the integral",
                  why: "Handle each term with its own table formula.",
                  calculation: "3\\int\\frac{dx}{\\sqrt{1-x^{2}}} - \\int\\frac{dx}{\\sqrt{1+x^{2}}}",
                },
                {
                  id: "s2",
                  title: "Apply the formulas",
                  why: "$\\int\\frac{dx}{\\sqrt{1-x^{2}}}=\\arcsin x$ and $\\int\\frac{dx}{\\sqrt{1+x^{2}}}=\\ln\\bigl|x+\\sqrt{1+x^{2}}\\bigr|$.",
                  calculation: "3\\arcsin x - \\ln\\bigl|x+\\sqrt{1+x^{2}}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\bigl(\\frac{3}{\\sqrt{1-x^{2}}}-\\frac{1}{\\sqrt{1+x^{2}}}\\bigr)\\,dx = 3\\arcsin x-\\ln\\bigl|x+\\sqrt{1+x^{2}}\\bigr|+C$.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "substitution",
      number: 2,
      title: "The Substitution Method",
      description: "Change of variables: choose an inner function whose derivative appears in the integrand.",
      exercises: "1.16–1.29",
      sections: [
        {
          id: "u-sub",
          title: "Core $u$-substitutions",
          summary: "Recognize compositions and replace the inner expression with $u$ so the integral becomes tabular.",
          examples: [
            {
              id: "1.16",
              title: "Linear expression inside a power",
              prompt: "Evaluate $\\displaystyle \\int (x+2)^{5}\\,dx$.",
              goal: "Substitute the linear expression inside the power.",
              steps: [
                {
                  id: "s1",
                  title: "Choose $u=x+2$",
                  why: "The inner linear piece is a natural substitution.",
                  calculation: "u=x+2 \\implies du=dx",
                },
                {
                  id: "s2",
                  title: "Integrate in $u$",
                  why: "The integral becomes a pure power of $u$.",
                  calculation: "\\int u^{5}\\,du = \\frac{u^{6}}{6}+C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "Replace $u$ with $x+2$.",
                  calculation: "\\frac{(x+2)^{6}}{6}+C",
                },
              ],
            },
            {
              id: "1.17",
              title: "Integral of $1/(2x+7)$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{dx}{2x+7}$.",
              goal: "Use a linear substitution to reach a logarithm.",
              steps: [
                {
                  id: "s1",
                  title: "Set $u=2x+7$",
                  why: "Then $du=2\\,dx$, so $dx=\\tfrac12\\,du$.",
                  calculation: "u=2x+7,\\quad dx=\\tfrac12\\,du",
                },
                {
                  id: "s2",
                  title: "Substitute and integrate",
                  why: "$\\int\\frac{1}{u}\\cdot\\tfrac12\\,du=\\tfrac12\\ln|u|+C$.",
                  calculation: "\\tfrac12\\ln|2x+7|+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{dx}{2x+7}=\\frac12\\ln|2x+7|+C$.",
                },
              ],
            },
            {
              id: "1.18",
              title: "Derivative in the numerator",
              prompt: "Evaluate $\\displaystyle \\int \\frac{2x}{1+x^{2}}\\,dx$.",
              goal: "Match the numerator with the derivative of the denominator.",
              steps: [
                {
                  id: "s1",
                  title: "Set $u=1+x^{2}$",
                  why: "Then $du=2x\\,dx$.",
                  calculation: "u=1+x^{2},\\quad du=2x\\,dx",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int\\frac{1}{u}\\,du=\\ln|u|+C$.",
                  calculation: "\\ln|1+x^{2}|+C",
                },
                {
                  id: "s3",
                  title: "Note",
                  why: "Since $1+x^{2}>0$, the absolute value may be dropped: $\\ln(1+x^{2})+C$.",
                },
              ],
            },
            {
              id: "1.19",
              title: "Cube root of a linear expression",
              prompt: "Evaluate $\\displaystyle \\int (3x+4)^{1/3}\\,dx$.",
              goal: "Substitute the inside of the root/power.",
              steps: [
                {
                  id: "s1",
                  title: "Set $u=3x+4$",
                  why: "Then $du=3\\,dx$, so $dx=\\tfrac13\\,du$.",
                  calculation: "u=3x+4,\\quad dx=\\tfrac13\\,du",
                },
                {
                  id: "s2",
                  title: "Integrate the power",
                  why: "$\\int u^{1/3}\\cdot\\tfrac13\\,du=\\tfrac13\\cdot\\frac{u^{4/3}}{4/3}+C=\\frac{u^{4/3}}{4}+C$.",
                  calculation: "\\frac{(3x+4)^{4/3}}{4}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int(3x+4)^{1/3}\\,dx=\\frac{(3x+4)^{4/3}}{4}+C$.",
                },
              ],
            },
            {
              id: "1.20",
              title: "Arctangent after $u=e^{x}$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{e^{x}}{1+e^{2x}}\\,dx$.",
              goal: "Substitute $u=e^{x}$ to reach $\\arctan$.",
              steps: [
                {
                  id: "s1",
                  title: "Set $u=e^{x}$",
                  why: "Then $du=e^{x}\\,dx$.",
                  calculation: "u=e^{x},\\quad du=e^{x}\\,dx",
                },
                {
                  id: "s2",
                  title: "Rewrite the integral",
                  why: "$\\int\\frac{du}{1+u^{2}}=\\arctan u+C$.",
                  calculation: "\\arctan(e^{x})+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{e^{x}}{1+e^{2x}}\\,dx=\\arctan(e^{x})+C$.",
                },
              ],
            },
            {
              id: "1.21",
              title: "Exponential of $x^{4}$",
              prompt: "Evaluate $\\displaystyle \\int x^{3} a^{x^{4}}\\,dx$ for $a>0$, $a\\\\neq 1$.",
              goal: "Let $u=x^{4}$ so that $du$ matches $x^{3}\\,dx$.",
              steps: [
                {
                  id: "s1",
                  title: "Choose $u=x^{4}$",
                  why: "Then $du=4x^{3}\\,dx$, hence $x^{3}\\,dx=\\tfrac14\\,du$.",
                  calculation: "u=x^{4},\\quad x^{3}\\,dx=\\tfrac14\\,du",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int a^{u}\\cdot\\tfrac14\\,du=\\frac{a^{u}}{4\\ln a}+C$.",
                  calculation: "\\frac{a^{x^{4}}}{4\\ln a}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int x^{3}a^{x^{4}}\\,dx=\\frac{a^{x^{4}}}{4\\ln a}+C$.",
                },
              ],
            },
            {
              id: "1.22",
              title: "Trigonometric log pattern",
              prompt: "Evaluate $\\displaystyle \\int \\frac{\\\\cos x}{4+\\\\sin x}\\,dx$.",
              goal: "Let $u$ be the expression whose derivative sits in the numerator.",
              steps: [
                {
                  id: "s1",
                  title: "Set $u=4+\\sin x$",
                  why: "Then $du=\\cos x\\,dx$.",
                  calculation: "u=4+\\sin x,\\quad du=\\cos x\\,dx",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int\\frac{1}{u}\\,du=\\ln|u|+C$.",
                  calculation: "\\ln|4+\\sin x|+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{\\cos x}{4+\\sin x}\\,dx=\\ln|4+\\sin x|+C$.",
                },
              ],
            },
            {
              id: "1.23",
              title: "Integrating $\\\\sin^{2}x$",
              prompt: "Evaluate $\\displaystyle \\int \\\\sin^{2}x\\,dx$.",
              goal: "Use a double-angle identity, then integrate.",
              steps: [
                {
                  id: "s1",
                  title: "Apply the identity",
                  why: "$\\sin^{2}x=\\frac{1-\\cos 2x}{2}$.",
                  formula: "\\sin^{2}x=\\frac{1-\\cos 2x}{2}",
                  calculation: "\\int\\sin^{2}x\\,dx = \\int\\frac{1-\\cos 2x}{2}\\,dx",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\int\\cos 2x\\,dx=\\tfrac12\\sin 2x$.",
                  calculation: "\\frac{x}{2}-\\frac{\\sin 2x}{4}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\sin^{2}x\\,dx=\\frac{x}{2}-\\frac{\\sin 2x}{4}+C$.",
                },
              ],
            },
            {
              id: "1.24",
              title: "Odd power of cosine",
              prompt: "Evaluate $\\displaystyle \\int \\\\cos^{3}x\\,dx$.",
              goal: "Save one cosine for $du$ and convert the rest with $\\cos^{2}=1-\\sin^{2}$.",
              steps: [
                {
                  id: "s1",
                  title: "Factor one cosine",
                  why: "$\\cos^{3}x=\\cos^{2}x\\cdot\\cos x=(1-\\sin^{2}x)\\cos x$.",
                  calculation: "\\int\\cos^{3}x\\,dx=\\int(1-\\sin^{2}x)\\cos x\\,dx",
                },
                {
                  id: "s2",
                  title: "Substitute $u=\\sin x$",
                  why: "Then $du=\\cos x\\,dx$.",
                  calculation: "\\int(1-u^{2})\\,du = u-\\frac{u^{3}}{3}+C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\sin x-\\frac{\\sin^{3}x}{3}+C$.",
                  calculation: "\\sin x-\\frac{\\sin^{3}x}{3}+C",
                },
              ],
            },
            {
              id: "1.25",
              title: "Arcsine form $\\\\sqrt{b^{2}-a^{2}x^{2}}$",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{b^{2}-a^{2}x^{2}}}$ for $a,b>0$.",
              goal: "Rescale to the standard arcsine integral.",
              steps: [
                {
                  id: "s1",
                  title: "Factor $b$ from the square root",
                  why: "Write $\\sqrt{b^{2}-a^{2}x^{2}}=b\\sqrt{1-(ax/b)^{2}}$.",
                  calculation: "\\int\\frac{dx}{b\\sqrt{1-(ax/b)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Set $t=ax/b$",
                  why: "Then $dx=(b/a)\\,dt$.",
                  calculation: "\\frac{1}{a}\\int\\frac{dt}{\\sqrt{1-t^{2}}} = \\frac{1}{a}\\arcsin t + C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\frac{1}{a}\\arcsin\\bigl(\\frac{ax}{b}\\bigr)+C$.",
                  calculation: "\\frac{1}{a}\\arcsin\\Bigl(\\frac{ax}{b}\\Bigr)+C",
                },
              ],
            },
            {
              id: "1.26",
              title: "Log form $\\\\sqrt{a^{2}x^{2}\\\\pm b^{2}}$",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{a^{2}x^{2}\\\\pm b^{2}}}$ for $a,b>0$.",
              goal: "Rescale to $\\int\\frac{dt}{\\sqrt{t^{2}\\pm 1}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Factor $a$ from the root",
                  why: "$\\sqrt{a^{2}x^{2}\\pm b^{2}}=a\\sqrt{x^{2}\\pm (b/a)^{2}}$.",
                  calculation: "\\frac{1}{a}\\int\\frac{dx}{\\sqrt{x^{2}\\pm (b/a)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Set $t=ax/b$",
                  why: "Reduce to $\\int\\frac{dt}{\\sqrt{t^{2}\\pm 1}}$.",
                  formula: "\\int\\frac{dt}{\\sqrt{t^{2}\\pm 1}}=\\ln\\bigl|t+\\sqrt{t^{2}\\pm 1}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\frac{1}{a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}\\pm b^{2}}\\bigr|+C$ (up to an absorbed constant).",
                  calculation: "\\frac{1}{a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}\\pm b^{2}}\\bigr|+C",
                },
              ],
            },
            {
              id: "1.27",
              title: "Arctangent form $\\\\sqrt{b^{2}+a^{2}x^{2}}$ in the denominator style",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{b^{2}+a^{2}x^{2}}$ for $a,b>0$.",
              goal: "Rescale to the standard arctangent integral. (Companion to the book’s $\\sqrt{b^{2}+a^{2}x^{2}}$ family.)",
              steps: [
                {
                  id: "s1",
                  title: "Factor $b^{2}$",
                  why: "Write $b^{2}+a^{2}x^{2}=b^{2}\\bigl(1+(ax/b)^{2}\\bigr)$.",
                  calculation: "\\int\\frac{dx}{b^{2}\\bigl(1+(ax/b)^{2}\\bigr)}",
                },
                {
                  id: "s2",
                  title: "Set $t=ax/b$",
                  why: "Then $dx=(b/a)\\,dt$.",
                  calculation: "\\frac{1}{ab}\\int\\frac{dt}{1+t^{2}} = \\frac{1}{ab}\\arctan t + C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\frac{1}{ab}\\arctan\\bigl(\\frac{ax}{b}\\bigr)+C$.",
                  calculation: "\\frac{1}{ab}\\arctan\\Bigl(\\frac{ax}{b}\\Bigr)+C",
                },
              ],
            },
            {
              id: "1.28",
              title: "Partial structure for $1/(x^{2}-1)$",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{x^{2}-1}$.",
              goal: "Factor and use a difference of logs (or hyperbolic arctanh).",
              steps: [
                {
                  id: "s1",
                  title: "Factor the denominator",
                  why: "$x^{2}-1=(x-1)(x+1)$.",
                  calculation: "\\frac{1}{x^{2}-1}=\\frac{1/2}{x-1}-\\frac{1/2}{x+1}",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "Each term is a logarithm.",
                  calculation: "\\tfrac12\\ln|x-1|-\\tfrac12\\ln|x+1|+C=\\tfrac12\\ln\\Bigl|\\frac{x-1}{x+1}\\Bigr|+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{dx}{x^{2}-1}=\\frac12\\ln\\bigl|\\frac{x-1}{x+1}\\bigr|+C$.",
                },
              ],
            },
            {
              id: "1.29",
              title: "Log form $\\\\sqrt{a^{2}x^{2}-b^{2}}$",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{a^{2}x^{2}-b^{2}}}$ for $a,b>0$ and $|ax|>b$.",
              goal: "Rescale to $\\int\\frac{dt}{\\sqrt{t^{2}-1}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Factor $a$",
                  why: "$\\sqrt{a^{2}x^{2}-b^{2}}=a\\sqrt{x^{2}-(b/a)^{2}}$.",
                  calculation: "\\frac{1}{a}\\int\\frac{dx}{\\sqrt{x^{2}-(b/a)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Set $t=ax/b$",
                  why: "Reduce to the standard log form.",
                  formula: "\\int\\frac{dt}{\\sqrt{t^{2}-1}}=\\ln\\bigl|t+\\sqrt{t^{2}-1}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\frac{1}{a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}-b^{2}}\\bigr|+C$.",
                  calculation: "\\frac{1}{a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}-b^{2}}\\bigr|+C",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "substitution-applications",
      number: 3,
      title: "Applications of the Substitution Method",
      description: "Harder substitutions: completing the square, trig products, and nested forms.",
      exercises: "1.30–1.56",
      sections: [
        {
          id: "advanced-sub",
          title: "Completing the square, roots, and trig products",
          summary: "Prepare the integrand, substitute, and reduce to table formulas (log, arctan, arcsine, power-reduction).",
          examples: [
            {
              id: "1.30",
              title: "Integral $1/(ax^{2}+bx+c)$ by completing the square",
              prompt: "Evaluate $\\displaystyle \\int \\frac{dx}{ax^{2}+bx+c}$ for $a>0$, treating the cases $\\Delta=b^{2}-4ac>0$ and $\\Delta<0$.",
              goal: "Complete the square, rescale, and reduce to a log or arctangent form.",
              steps: [
                {
                  id: "s1",
                  title: "Complete the square",
                  why: "Factor $a$ and rewrite the quadratic as a shifted square plus a constant involving $\\Delta=b^{2}-4ac$.",
                  calculation: "ax^{2}+bx+c=a\\Bigl(\\bigl(x+\\tfrac{b}{2a}\\bigr)^{2}-\\tfrac{\\Delta}{4a^{2}}\\Bigr)",
                },
                {
                  id: "s2",
                  title: "Substitute $t=x+b/(2a)$",
                  why: "The integral becomes a constant times $\\int\\frac{dt}{t^{2}\\pm k^{2}}$.",
                },
                {
                  id: "s3",
                  title: "Case $\\Delta>0$",
                  why: "Then $t^{2}-k^{2}$ appears and the antiderivative is logarithmic:",
                  formula: "\\int\\frac{dt}{t^{2}-k^{2}}=\\frac{1}{2k}\\ln\\Bigl|\\frac{t-k}{t+k}\\Bigr|+C",
                },
                {
                  id: "s4",
                  title: "Case $\\Delta<0$",
                  why: "Then $t^{2}+k^{2}$ appears and the antiderivative is an arctangent:",
                  formula: "\\int\\frac{dt}{t^{2}+k^{2}}=\\frac{1}{k}\\arctan\\frac{t}{k}+C",
                  notes: "Return to $x$ by substituting $t=x+\\frac{b}{2a}$ and $k=\\sqrt{|\\Delta|}/(2a)$.",
                },
              ],
            },
            {
              id: "1.31",
              title: "Complete the square for $x^{2}+2x+2$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{dx}{x^{2}+2x+2}$.",
              goal: "Complete the square, then use arctangent.",
              steps: [
                {
                  id: "s1",
                  title: "Complete the square",
                  why: "$x^{2}+2x+2=(x+1)^{2}+1$.",
                  calculation: "x^{2}+2x+2=(x+1)^{2}+1",
                },
                {
                  id: "s2",
                  title: "Set $u=x+1$",
                  why: "Then $du=dx$.",
                  calculation: "\\int\\frac{du}{u^{2}+1}=\\arctan u+C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\arctan(x+1)+C$.",
                  calculation: "\\arctan(x+1)+C",
                },
              ],
            },
            {
              id: "1.32",
              title: "Log form after completing the square",
              prompt: "Evaluate $\\displaystyle \\int \\frac{dx}{x^{2}+2x-1}$.",
              goal: "Complete the square to reach a difference of squares.",
              steps: [
                {
                  id: "s1",
                  title: "Complete the square",
                  why: "$x^{2}+2x-1=(x+1)^{2}-2$.",
                  calculation: "x^{2}+2x-1=(x+1)^{2}-2",
                },
                {
                  id: "s2",
                  title: "Set $u=x+1$",
                  why: "$\\int\\frac{du}{u^{2}-(\\sqrt{2})^{2}}$.",
                  formula: "\\int\\frac{du}{u^{2}-a^{2}}=\\frac{1}{2a}\\ln\\Bigl|\\frac{u-a}{u+a}\\Bigr|+C",
                },
                {
                  id: "s3",
                  title: "Finish",
                  why: "$\\frac{1}{2\\sqrt{2}}\\ln\\bigl|\\frac{x+1-\\sqrt{2}}{x+1+\\sqrt{2}}\\bigr|+C$.",
                  calculation: "\\frac{1}{2\\sqrt{2}}\\ln\\Bigl|\\frac{x+1-\\sqrt{2}}{x+1+\\sqrt{2}}\\Bigr|+C",
                },
              ],
            },
            {
              id: "1.33",
              title: "Linear over quadratic",
              prompt: "Evaluate $\\displaystyle \\int \\frac{ax+b}{ax^{2}+bx+c}\\,dx$ when the coefficients match so the numerator is nearly the derivative of the denominator (general pattern with parameters $a,b,c$).",
              goal: "Split into a derivative-of-denominator piece plus a remainder handled like exercise 1.30.",
              steps: [
                {
                  id: "s1",
                  title: "Compare with the derivative",
                  why: "The derivative of $ax^{2}+bx+c$ is $2ax+b$. Rewrite the numerator as a multiple of that derivative plus a constant.",
                  calculation: "ax+b=\\alpha(2ax+b)+\\beta",
                },
                {
                  id: "s2",
                  title: "Split the integral",
                  why: "One piece becomes $\\alpha\\int\\frac{d(ax^{2}+bx+c)}{ax^{2}+bx+c}=\\alpha\\ln|ax^{2}+bx+c|$.",
                },
                {
                  id: "s3",
                  title: "Handle the remainder",
                  why: "The leftover constant over the quadratic is reduced by completing the square exactly as in 1.30.",
                  notes: "This is the standard “log + arctan/log” decomposition for linear-over-quadratic integrands.",
                },
              ],
            },
            {
              id: "1.34",
              title: "Polynomial over a quadratic",
              prompt: "Explain how to evaluate $\\displaystyle \\int \\frac{P_{n}(x)}{ax^{2}+bx+c}\\,dx$ when $\\\\deg P_{n}\\\\ge 2$.",
              goal: "Divide polynomials first, then integrate the proper remainder.",
              steps: [
                {
                  id: "s1",
                  title: "Polynomial division",
                  why: "Write $P_{n}(x)=Q_{n-2}(x)(ax^{2}+bx+c)+Rx+S$.",
                  calculation: "\\frac{P_{n}(x)}{ax^{2}+bx+c}=Q_{n-2}(x)+\\frac{Rx+S}{ax^{2}+bx+c}",
                },
                {
                  id: "s2",
                  title: "Integrate the quotient",
                  why: "$\\int Q_{n-2}(x)\\,dx$ is a sum of table power integrals.",
                },
                {
                  id: "s3",
                  title: "Integrate the remainder",
                  why: "Reduce $\\int\\frac{Rx+S}{ax^{2}+bx+c}\\,dx$ using the method of 1.33 / 1.30.",
                  notes: "After division the hard part is always linear-over-quadratic.",
                },
              ],
            },
            {
              id: "1.35",
              title: "Long division then complete the square",
              prompt: "Evaluate $\\displaystyle \\int \\frac{x^{6}+5x^{4}+7x^{2}+3x+9}{x^{2}+2x+6}\\,dx$ (book form with the given numerator/denominator pair).",
              goal: "Divide, integrate the polynomial quotient, then treat the linear remainder.",
              steps: [
                {
                  id: "s1",
                  title: "Divide the polynomials",
                  why: "Obtain a degree-4 quotient plus a linear remainder over $x^{2}+2x+6$.",
                },
                {
                  id: "s2",
                  title: "Integrate the quotient term by term",
                  why: "Each power integrates by the power rule.",
                },
                {
                  id: "s3",
                  title: "Handle the remainder",
                  why: "Complete the square in $x^{2}+2x+6=(x+1)^{2}+5$ and finish with a logarithm and an arctangent.",
                  notes: "The book’s final answer combines a polynomial, $\\ln(x^{2}+2x+6)$, and an $\\arctan$ term.",
                },
              ],
            },
            {
              id: "1.36",
              title: "Arcsine for $\\\\sqrt{4-x^{2}}$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{dx}{\\\\sqrt{4-x^{2}}}$.",
              goal: "Recognize a scaled arcsine integral.",
              steps: [
                {
                  id: "s1",
                  title: "Factor 4 inside the root",
                  why: "$\\sqrt{4-x^{2}}=2\\sqrt{1-(x/2)^{2}}$.",
                  calculation: "\\int\\frac{dx}{2\\sqrt{1-(x/2)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Set $t=x/2$",
                  why: "Then $dx=2\\,dt$.",
                  calculation: "\\int\\frac{dt}{\\sqrt{1-t^{2}}}=\\arcsin t+C",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\arcsin(x/2)+C$.",
                  calculation: "\\arcsin\\frac{x}{2}+C",
                },
              ],
            },
            {
              id: "1.37",
              title: "Arcsine for $\\\\sqrt{3-x^{2}}$",
              prompt: "Evaluate $\\displaystyle \\int \\frac{dx}{\\\\sqrt{3-x^{2}}}$.",
              goal: "Same pattern with $a=\\sqrt{3}$.",
              steps: [
                {
                  id: "s1",
                  title: "Write a scaled form",
                  why: "$\\sqrt{3-x^{2}}=\\sqrt{3}\\sqrt{1-x^{2}/3}$.",
                },
                {
                  id: "s2",
                  title: "Substitute $t=x/\\sqrt{3}$",
                  why: "Reduce to $\\int\\frac{dt}{\\sqrt{1-t^{2}}}$.",
                  calculation: "\\arcsin\\frac{x}{\\sqrt{3}}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{dx}{\\sqrt{3-x^{2}}}=\\arcsin\\frac{x}{\\sqrt{3}}+C$.",
                },
              ],
            },
            {
              id: "1.38",
              title: "Log form for $\\\\sqrt{x^{2}+25}$",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{x^{2}+25}}$.",
              goal: "Use the standard log / inverse-hyperbolic formula.",
              steps: [
                {
                  id: "s1",
                  title: "Recognize the table form",
                  why: "$\\int\\frac{dx}{\\sqrt{x^{2}+a^{2}}}=\\ln\\bigl|x+\\sqrt{x^{2}+a^{2}}\\bigr|+C$ with $a=5$.",
                  formula: "\\int\\frac{dx}{\\sqrt{x^{2}+a^{2}}}=\\ln\\bigl|x+\\sqrt{x^{2}+a^{2}}\\bigr|+C",
                },
                {
                  id: "s2",
                  title: "Substitute $a=5$",
                  why: "$\\ln\\bigl|x+\\sqrt{x^{2}+25}\\bigr|+C$.",
                  calculation: "\\ln\\bigl|x+\\sqrt{x^{2}+25}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{dx}{\\sqrt{x^{2}+25}}=\\ln\\bigl|x+\\sqrt{x^{2}+25}\\bigr|+C$.",
                },
              ],
            },
            {
              id: "1.39",
              title: "Log form for $\\\\sqrt{x^{2}-3}$",
              prompt: "Evaluate $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{x^{2}-3}}$.",
              goal: "Use the table formula for $\\sqrt{x^{2}-a^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Identify $a=\\sqrt{3}$",
                  why: "$\\int\\frac{dx}{\\sqrt{x^{2}-a^{2}}}=\\ln\\bigl|x+\\sqrt{x^{2}-a^{2}}\\bigr|+C$.",
                },
                {
                  id: "s2",
                  title: "Write the answer",
                  why: "$\\ln\\bigl|x+\\sqrt{x^{2}-3}\\bigr|+C$.",
                  calculation: "\\ln\\bigl|x+\\sqrt{x^{2}-3}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Domain note",
                  why: "This formula applies for $|x|>\\sqrt{3}$.",
                },
              ],
            },
            {
              id: "1.40",
              title: "Integral $\\\\sqrt{ax^{2}+bx+c}$ family (method)",
              prompt: "Describe how to evaluate $\\displaystyle \\\\int \\\\sqrt{ax^{2}+bx+c}\\\\,dx$ (or $\\\\int\\\\frac{dx}{\\\\sqrt{ax^{2}+bx+c}}$) according to the sign of $a$ and $\\\\Delta$.",
              goal: "Complete the square and reduce to one of the three table forms $\\sqrt{t^{2}\\pm k^{2}}$ or $\\sqrt{k^{2}-t^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Complete the square",
                  why: "Shift $x$ so the radicand becomes $A(t^{2}\\pm k^{2})$ or $A(k^{2}-t^{2})$.",
                },
                {
                  id: "s2",
                  title: "Choose the table formula",
                  why: "Use arcsine for $k^{2}-t^{2}$, and log (or inverse hyperbolic) forms for $t^{2}\\pm k^{2}$.",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "Undo the linear shift $t=x+b/(2a)$.",
                  notes: "Exercise 1.40 in the book is the general template used by 1.36–1.39 and 1.41–1.42.",
                },
              ],
            },
            {
              id: "1.41",
              title: "Arcsine after completing the square",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{dx}{\\\\sqrt{-x^{2}+2x+3}}$.",
              goal: "Complete the square under the root, then use arcsine.",
              steps: [
                {
                  id: "s1",
                  title: "Complete the square",
                  why: "$-x^{2}+2x+3=4-(x-1)^{2}$.",
                  calculation: "-x^{2}+2x+3=4-(x-1)^{2}",
                },
                {
                  id: "s2",
                  title: "Set $u=x-1$",
                  why: "$\\int\\frac{du}{\\sqrt{4-u^{2}}}=\\arcsin(u/2)+C$.",
                  calculation: "\\arcsin\\frac{x-1}{2}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\frac{dx}{\\sqrt{-x^{2}+2x+3}}=\\arcsin\\frac{x-1}{2}+C$.",
                },
              ],
            },
            {
              id: "1.42",
              title: "Log after completing the square",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{dx}{\\\\sqrt{x^{2}+2x+3}}$.",
              goal: "Complete the square to $ (x+1)^{2}+2 $, then use the log formula.",
              steps: [
                {
                  id: "s1",
                  title: "Complete the square",
                  why: "$x^{2}+2x+3=(x+1)^{2}+2$.",
                },
                {
                  id: "s2",
                  title: "Set $u=x+1$",
                  why: "$\\int\\frac{du}{\\sqrt{u^{2}+2}}=\\ln\\bigl|u+\\sqrt{u^{2}+2}\\bigr|+C$.",
                },
                {
                  id: "s3",
                  title: "Return to $x$",
                  why: "$\\ln\\bigl|x+1+\\sqrt{x^{2}+2x+3}\\bigr|+C$.",
                  calculation: "\\ln\\bigl|x+1+\\sqrt{x^{2}+2x+3}\\bigr|+C",
                },
              ],
            },
            {
              id: "1.43",
              title: "$(px+q)/\\\\sqrt{ax^{2}+bx+c}$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{px+q}{\\\\sqrt{ax^{2}+bx+c}}\\,dx$ for $a\\\\neq 0$, $p\\\\neq 0$.",
              goal: "Split into a derivative-of-radicand piece plus a constant over a square root.",
              steps: [
                {
                  id: "s1",
                  title: "Match the derivative of the radicand",
                  why: "Write $px+q=\\alpha(2ax+b)+\\beta$.",
                },
                {
                  id: "s2",
                  title: "First integral",
                  why: "$\\alpha\\int\\frac{d(ax^{2}+bx+c)}{\\sqrt{ax^{2}+bx+c}}=2\\alpha\\sqrt{ax^{2}+bx+c}$.",
                },
                {
                  id: "s3",
                  title: "Second integral",
                  why: "$\\beta\\int\\frac{dx}{\\sqrt{ax^{2}+bx+c}}$ is handled by completing the square as in 1.40.",
                  notes: "This is the companion of 1.33 for square-root denominators.",
                },
              ],
            },
            {
              id: "1.44",
              title: "Concrete linear-over-root example",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{3x+5}{\\\\sqrt{4x^{2}-2x+5}}\\,dx$.",
              goal: "Split using the derivative of $4x^{2}-2x+5$, then complete the square on the remainder.",
              steps: [
                {
                  id: "s1",
                  title: "Write the numerator via the derivative",
                  why: "$\\frac{d}{dx}(4x^{2}-2x+5)=8x-2$. Solve $3x+5=\\alpha(8x-2)+\\beta$.",
                },
                {
                  id: "s2",
                  title: "Integrate the matched piece",
                  why: "Produces a multiple of $\\sqrt{4x^{2}-2x+5}$.",
                },
                {
                  id: "s3",
                  title: "Integrate the constant remainder",
                  why: "Complete the square under the root and finish with a logarithm (or arcsine, depending on sign).",
                  notes: "Follow the same algebra as the book’s worked 1.44.",
                },
              ],
            },
            {
              id: "1.45",
              title: "Product-to-sum for $\\\\sin ax\\\\cos bx$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\sin(ax)\\\\cos(bx)\\\\,dx$ for $a\\\\neq\\\\pm b$.",
              goal: "Convert the product to a sum of sines, then integrate.",
              steps: [
                {
                  id: "s1",
                  title: "Apply the identity",
                  why: "$\\sin A\\cos B=\\tfrac12\\bigl(\\sin(A+B)+\\sin(A-B)\\bigr)$.",
                  formula: "\\sin A\\cos B=\\tfrac12\\bigl(\\sin(A+B)+\\sin(A-B)\\bigr)",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\tfrac12\\int\\sin((a+b)x)\\,dx+\\tfrac12\\int\\sin((a-b)x)\\,dx$.",
                  calculation: "-\\frac{\\cos((a+b)x)}{2(a+b)}-\\frac{\\cos((a-b)x)}{2(a-b)}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "Valid whenever $a\\neq\\pm b$; the resonant cases $a=\\pm b$ are handled separately.",
                },
              ],
            },
            {
              id: "1.46",
              title: "Product-to-sum for $\\\\cos ax\\\\cos bx$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\cos(ax)\\\\cos(bx)\\\\,dx$ for $a\\\\neq\\\\pm b$.",
              goal: "Use the cosine product identity.",
              steps: [
                {
                  id: "s1",
                  title: "Apply the identity",
                  why: "$\\cos A\\cos B=\\tfrac12\\bigl(\\cos(A+B)+\\cos(A-B)\\bigr)$.",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\frac{\\sin((a+b)x)}{2(a+b)}+\\frac{\\sin((a-b)x)}{2(a-b)}+C$.",
                  calculation: "\\frac{\\sin((a+b)x)}{2(a+b)}+\\frac{\\sin((a-b)x)}{2(a-b)}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "Again assume $a\\neq\\pm b$.",
                },
              ],
            },
            {
              id: "1.47",
              title: "$\\\\cos 3x\\\\cos 5x$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\cos 3x\\\\,\\\\cos 5x\\\\,dx$.",
              goal: "Specialize the previous identity.",
              steps: [
                {
                  id: "s1",
                  title: "Product-to-sum",
                  why: "$\\cos 3x\\cos 5x=\\tfrac12(\\cos 8x+\\cos 2x)$.",
                  calculation: "\\cos 3x\\cos 5x=\\tfrac12(\\cos 8x+\\cos 2x)",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\tfrac{1}{16}\\sin 8x+\\tfrac{1}{4}\\sin 2x+C$.",
                  calculation: "\\frac{\\sin 8x}{16}+\\frac{\\sin 2x}{4}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\cos 3x\\cos 5x\\,dx=\\frac{\\sin 8x}{16}+\\frac{\\sin 2x}{4}+C$.",
                },
              ],
            },
            {
              id: "1.48",
              title: "$\\\\sin 2x\\\\cos 3x$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\sin 2x\\\\,\\\\cos 3x\\\\,dx$.",
              goal: "Use $\\sin A\\cos B=\\tfrac12(\\sin(A+B)+\\sin(A-B))$.",
              steps: [
                {
                  id: "s1",
                  title: "Convert to a sum",
                  why: "$\\sin 2x\\cos 3x=\\tfrac12(\\sin 5x+\\sin(-x))=\\tfrac12(\\sin 5x-\\sin x)$.",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$-\\frac{\\cos 5x}{10}+\\frac{\\cos x}{2}+C$.",
                  calculation: "-\\frac{\\cos 5x}{10}+\\frac{\\cos x}{2}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\sin 2x\\cos 3x\\,dx=-\\frac{\\cos 5x}{10}+\\frac{\\cos x}{2}+C$.",
                },
              ],
            },
            {
              id: "1.49",
              title: "$\\\\sin 4x\\\\sin 7x$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\sin 4x\\\\,\\\\sin 7x\\\\,dx$.",
              goal: "Use the sine product identity.",
              steps: [
                {
                  id: "s1",
                  title: "Identity",
                  why: "$\\sin A\\sin B=\\tfrac12\\bigl(\\cos(A-B)-\\cos(A+B)\\bigr)$.",
                  calculation: "\\sin 4x\\sin 7x=\\tfrac12(\\cos 3x-\\cos 11x)",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\frac{\\sin 3x}{6}-\\frac{\\sin 11x}{22}+C$.",
                  calculation: "\\frac{\\sin 3x}{6}-\\frac{\\sin 11x}{22}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\sin 4x\\sin 7x\\,dx=\\frac{\\sin 3x}{6}-\\frac{\\sin 11x}{22}+C$.",
                },
              ],
            },
            {
              id: "1.50",
              title: "$\\\\sin^{2}(3x)$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\sin^{2}(3x)\\\\,dx$.",
              goal: "Use the power-reduction identity.",
              steps: [
                {
                  id: "s1",
                  title: "Reduce the power",
                  why: "$\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}$ with $\\theta=3x$.",
                  calculation: "\\sin^{2}(3x)=\\frac{1-\\cos 6x}{2}",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\frac{x}{2}-\\frac{\\sin 6x}{12}+C$.",
                  calculation: "\\frac{x}{2}-\\frac{\\sin 6x}{12}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\sin^{2}(3x)\\,dx=\\frac{x}{2}-\\frac{\\sin 6x}{12}+C$.",
                },
              ],
            },
            {
              id: "1.51",
              title: "$\\\\cos^{2}(4x)$",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\cos^{2}(4x)\\\\,dx$.",
              goal: "Use $\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2}$.",
              steps: [
                {
                  id: "s1",
                  title: "Reduce the power",
                  why: "$\\cos^{2}(4x)=\\frac{1+\\cos 8x}{2}$.",
                },
                {
                  id: "s2",
                  title: "Integrate",
                  why: "$\\frac{x}{2}+\\frac{\\sin 8x}{16}+C$.",
                  calculation: "\\frac{x}{2}+\\frac{\\sin 8x}{16}+C",
                },
                {
                  id: "s3",
                  title: "State the answer",
                  why: "$\\displaystyle \\int\\cos^{2}(4x)\\,dx=\\frac{x}{2}+\\frac{\\sin 8x}{16}+C$.",
                },
              ],
            },
            {
              id: "1.52",
              title: "Integral of $a^{\\\\ln x}$ / related log-power",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{a^{\\\\ln x}}{x}\\\\,dx$ for $a>0$, $a\\\\neq 1$ (equivalently treat $\\\\int a^{\\\\ln x}\\\\frac{dx}{x}$).",
              goal: "Substitute $t=\\ln x$.",
              steps: [
                {
                  id: "s1",
                  title: "Set $t=\\ln x$",
                  why: "Then $dt=dx/x$.",
                  calculation: "\\int a^{t}\\,dt",
                },
                {
                  id: "s2",
                  title: "Integrate the exponential",
                  why: "$\\frac{a^{t}}{\\ln a}+C$ when $a\\neq 1$.",
                  calculation: "\\frac{a^{\\ln x}}{\\ln a}+C",
                },
                {
                  id: "s3",
                  title: "Special case $a=1$",
                  why: "If $a=1$ the integrand is $1/x$ and the answer is $\\ln|x|+C$.",
                  notes: "The book records both the $a\\neq 1$ and $a=1$ cases.",
                },
              ],
            },
            {
              id: "1.53",
              title: "Substitution for $x^{2}/(1+x^{4})$ pattern",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{x^{2}+1}{x^{4}+1}\\\\,dx$ (equivalently the book’s split of related $x^{4}\\\\pm 1$ forms).",
              goal: "Divide by $x^{2}$ / use $t=x-1/x$ style substitutions.",
              steps: [
                {
                  id: "s1",
                  title: "Divide numerator and denominator by $x^{2}$",
                  why: "Prepare a substitution $t=x-\\frac{1}{x}$ or $t=x+\\frac{1}{x}$.",
                  calculation: "\\int\\frac{1+\\frac{1}{x^{2}}}{x^{2}+\\frac{1}{x^{2}}}\\,dx",
                },
                {
                  id: "s2",
                  title: "Set $t=x-1/x$",
                  why: "Then $dt=(1+1/x^{2})\\,dx$ and $x^{2}+1/x^{2}=t^{2}+2$.",
                },
                {
                  id: "s3",
                  title: "Finish with arctangent",
                  why: "$\\int\\frac{dt}{t^{2}+2}=\\frac{1}{\\sqrt{2}}\\arctan\\frac{t}{\\sqrt{2}}+C$, then return to $x$.",
                  notes: "This is the standard “$t=x\\pm 1/x$” trick featured in 1.53–1.55.",
                },
              ],
            },
            {
              id: "1.54",
              title: "The $t=x+1/x$ companion",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{x^{2}-1}{x^{4}+1}\\\\,dx$ using $t=x+\\\\frac{1}{x}$.",
              goal: "Mirror the previous method with the plus substitution.",
              steps: [
                {
                  id: "s1",
                  title: "Divide by $x^{2}$",
                  why: "$\\int\\frac{1-1/x^{2}}{x^{2}+1/x^{2}}\\,dx$.",
                },
                {
                  id: "s2",
                  title: "Set $t=x+1/x$",
                  why: "Then $dt=(1-1/x^{2})\\,dx$ and $x^{2}+1/x^{2}=t^{2}-2$.",
                },
                {
                  id: "s3",
                  title: "Integrate",
                  why: "$\\int\\frac{dt}{t^{2}-2}$ is logarithmic; return to $x$.",
                  calculation: "\\frac{1}{2\\sqrt{2}}\\ln\\Bigl|\\frac{t-\\sqrt{2}}{t+\\sqrt{2}}\\Bigr|+C",
                },
              ],
            },
            {
              id: "1.55",
              title: "Harder $x\\\\pm 1/x$ reduction",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\frac{x^{2}+1}{x^{4}+x^{3}-x+1}\\\\,dx$ (book denominator of similar shape).",
              goal: "Factor or rewrite to enable $t=x-1/x$, then finish with arctangent.",
              steps: [
                {
                  id: "s1",
                  title: "Divide by $x^{2}$ and rearrange",
                  why: "Aim for an expression in $x-1/x$.",
                },
                {
                  id: "s2",
                  title: "Substitute $t=x-1/x$",
                  why: "The integral becomes rational in $t$.",
                },
                {
                  id: "s3",
                  title: "Complete and integrate",
                  why: "Reduce to an arctangent (as in the book’s final $\\arctan$ expression).",
                  notes: "Follow the algebra in the PDF solution for the precise coefficients.",
                },
              ],
            },
            {
              id: "1.56",
              title: "Trigonometric substitution for $\\\\sqrt{b^{2}-a^{2}x^{2}}$ area form",
              prompt: "Evaluate $\\displaystyle \\\\int \\\\sqrt{b^{2}-a^{2}x^{2}}\\\\,dx$ for $a,b>0$.",
              goal: "Use $ax=b\\sin u$ (or the book’s $t=ax/b$ then $t=\\sin u$).",
              steps: [
                {
                  id: "s1",
                  title: "Rescale",
                  why: "Write $\\sqrt{b^{2}-a^{2}x^{2}}=b\\sqrt{1-(ax/b)^{2}}$ and set $t=ax/b$.",
                },
                {
                  id: "s2",
                  title: "Trigonometric substitution",
                  why: "Let $t=\\sin u$, so $\\sqrt{1-t^{2}}=\\cos u$ and $dt=\\cos u\\,du$.",
                  calculation: "\\int\\sqrt{1-t^{2}}\\,dt=\\int\\cos^{2}u\\,du",
                },
                {
                  id: "s3",
                  title: "Integrate $\\cos^{2}u$",
                  why: "Use $\\cos^{2}u=\\frac{1+\\cos 2u}{2}$, then return to $t$ and $x$.",
                  formula: "\\int\\sqrt{b^{2}-a^{2}x^{2}}\\,dx=\\frac{x}{2}\\sqrt{b^{2}-a^{2}x^{2}}+\\frac{b^{2}}{2a}\\arcsin\\frac{ax}{b}+C",
                  notes: "This matches the book’s final mix of algebraic and arcsine terms.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'integration-by-parts',
      number: 4,
      title: 'The Method of Integration by Parts',
      description:
        'Undo the product rule: choose $u$ and $dv$, then apply $\\int u\\,dv = uv - \\int v\\,du$.',
      exercises: '1.57–1.68',
      sections: [
        {
          id: 'parts-core',
          title: 'Classic parts patterns',
          summary:
            'Polynomial × log, exponential, or trig — differentiate the factor that simplifies.',
          examples: [
            {
              id: '1.57',
              title: 'Integrating $x\\ln x$',
              prompt: 'Evaluate $\\displaystyle \\int x\\ln x\\,dx$.',
              goal: 'Let $u=\\ln x$ so differentiation removes the logarithm.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose parts',
                  why: 'Logs become simpler when differentiated; powers are easy to integrate.',
                  calculation: 'u=\\ln x,\\quad dv=x\\,dx \\implies du=\\frac{1}{x}\\,dx,\\quad v=\\frac{x^{2}}{2}',
                },
                {
                  id: 's2',
                  title: 'Apply the formula',
                  why: 'Substitute into $uv-\\int v\\,du$.',
                  calculation:
                    '\\frac{x^{2}}{2}\\ln x - \\int\\frac{x^{2}}{2}\\cdot\\frac{1}{x}\\,dx = \\frac{x^{2}}{2}\\ln x - \\tfrac12\\int x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Finish',
                  why: 'The remaining integral is elementary.',
                  calculation: '\\frac{x^{2}}{2}\\ln x - \\frac{x^{2}}{4}+C = \\frac{x^{2}}{4}(2\\ln x-1)+C',
                },
              ],
            },
            {
              id: '1.58',
              title: 'Integrating $x e^{x}$',
              prompt: 'Evaluate $\\displaystyle \\int x e^{x}\\,dx$.',
              goal: 'Differentiate the polynomial factor and integrate the exponential.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose $u=x$, $dv=e^{x}\\,dx$',
                  why: 'Then $du=dx$ and $v=e^{x}$.',
                  calculation: 'u=x,\\quad dv=e^{x}\\,dx \\implies du=dx,\\quad v=e^{x}',
                },
                {
                  id: 's2',
                  title: 'Apply parts',
                  why: 'The new integral $\\int e^{x}\\,dx$ is immediate.',
                  calculation: 'x e^{x} - \\int e^{x}\\,dx = x e^{x} - e^{x}+C = e^{x}(x-1)+C',
                },
              ],
            },
            {
              id: '1.60',
              title: 'Integrating $x\\sin x$',
              prompt: 'Evaluate $\\displaystyle \\int x\\sin x\\,dx$.',
              goal: 'Practice parts with a trigonometric factor as $dv$.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose parts',
                  why: 'Differentiate $x$; integrate $\\sin x$.',
                  calculation: 'u=x,\\quad dv=\\sin x\\,dx \\implies du=dx,\\quad v=-\\cos x',
                },
                {
                  id: 's2',
                  title: 'Finish the cosine integral',
                  why: 'After parts, $\\int\\cos x\\,dx=\\sin x$ remains.',
                  calculation: '-x\\cos x + \\int\\cos x\\,dx = -x\\cos x + \\sin x + C',
                },
              ],
            },
{
              id: '1.61',
              title: 'Parts twice for $x^{2}\\cos x$',
              prompt: 'Evaluate $\\displaystyle \\int x^{2}\\cos x\\,dx$.',
              goal: 'Reduce the polynomial degree with two applications of parts.',
              steps: [
                {
                  id: 's1',
                  title: 'First parts step',
                  why: 'Let $u=x^{2}$ so the degree drops; integrate cosine.',
                  calculation:
                    'u=x^{2},\\quad dv=\\cos x\\,dx \\implies \\int x^{2}\\cos x\\,dx = x^{2}\\sin x - 2\\int x\\sin x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Reuse $\\int x\\sin x\\,dx$',
                  why: 'From the previous chapter, $\\int x\\sin x\\,dx=-x\\cos x+\\sin x$.',
                  calculation:
                    'x^{2}\\sin x - 2(-x\\cos x+\\sin x)+C = x^{2}\\sin x + 2x\\cos x - 2\\sin x + C',
                },
              ],
            },
{
              id: '1.63',
              title: 'Exponential × sine',
              prompt: 'Evaluate $\\displaystyle \\int e^{x}\\sin x\\,dx$.',
              goal: 'Apply parts twice and solve for the original integral.',
              steps: [
                {
                  id: 's1',
                  title: 'Parts once',
                  why: 'Take $u=e^{x}$ and $dv=\\sin x\\,dx$.',
                  calculation: '\\int e^{x}\\sin x\\,dx = -e^{x}\\cos x + \\int e^{x}\\cos x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Parts again on the cosine integral',
                  why: 'A second parts step produces the original integral with a minus sign.',
                  calculation:
                    '\\int e^{x}\\cos x\\,dx = e^{x}\\sin x - \\int e^{x}\\sin x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Solve for $I$',
                  why: 'Collect the unknown integral on one side and divide by $2$.',
                  calculation:
                    'I = -e^{x}\\cos x + e^{x}\\sin x - I \\implies I = \\tfrac12 e^{x}(\\sin x-\\cos x)+C',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'parts-applications',
      number: 5,
      title: 'Applications of Integration by Parts',
      description:
        'Repeated parts, reduction ideas, and integrals that mix radicals with polynomials.',
      exercises: '1.69–1.81',
      sections: [
        {
          id: 'parts-advanced',
          title: 'Repeated parts & mixed forms',
          summary:
            'When one parts step is not enough, apply the method again or rearrange.',
          examples: [
          ],
        },
      ],
    },
    {
      id: 'rational-functions',
      number: 6,
      title: 'Integration of Rational Functions',
      description:
        'Partial fractions: decompose $\\frac{P(x)}{Q(x)}$ into simpler pieces that integrate by the table.',
      exercises: '1.82–1.97',
      sections: [
        {
          id: 'partial-fractions',
          title: 'Partial fraction decomposition',
          summary:
            'Factor the denominator, write undetermined coefficients, then integrate term by term.',
          examples: [
            {
              id: 'ex-1-82',
              title: 'Distinct linear factors',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{dx}{x(x+5)}$.',
              goal: 'Decompose into partial fractions and integrate logarithms.',
              steps: [
                {
                  id: 's1',
                  title: 'Set up partial fractions',
                  why: 'The denominator factors as $x(x+5)$ with distinct linear roots.',
                  calculation: '\\frac{1}{x(x+5)} = \\frac{A}{x}+\\frac{B}{x+5}',
                },
                {
                  id: 's2',
                  title: 'Solve for $A$ and $B$',
                  why: 'Clear the denominator: $1=A(x+5)+Bx$. Comparing coefficients gives $A=\\tfrac15$, $B=-\\tfrac15$.',
                  calculation: '\\frac{1}{x(x+5)} = \\frac{1}{5}\\Bigl(\\frac{1}{x}-\\frac{1}{x+5}\\Bigr)',
                },
                {
                  id: 's3',
                  title: 'Integrate',
                  why: 'Each term is a logarithm.',
                  calculation:
                    '\\tfrac15\\ln|x| - \\tfrac15\\ln|x+5|+C = \\tfrac15\\ln\\Bigl|\\frac{x}{x+5}\\Bigr|+C',
                },
              ],
            },
            {
              id: 'ex-1-83',
              title: 'Polynomial division first',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{x^{3}}{x^{2}+1}\\,dx$.',
              goal: 'When degrees are not proper, divide before integrating.',
              steps: [
                {
                  id: 's1',
                  title: 'Divide',
                  why: 'Numerator degree exceeds denominator degree, so write a polynomial plus a proper remainder.',
                  calculation: '\\frac{x^{3}}{x^{2}+1} = x - \\frac{x}{x^{2}+1}',
                },
                {
                  id: 's2',
                  title: 'Integrate each part',
                  why: 'The first term is elementary; the second matches $\\tfrac12\\ln(x^{2}+1)$ after $u=x^{2}+1$.',
                  calculation: '\\frac{x^{2}}{2} - \\tfrac12\\ln(x^{2}+1)+C',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'irrational-functions',
      number: 7,
      title: 'Integration of Irrational Functions',
      description:
        'Rationalizing substitutions that turn roots into rational integrands.',
      exercises: '1.98–1.106',
      sections: [
        {
          id: 'roots',
          title: 'Root substitutions',
          summary:
            'Choose a power of a linear (or fractional-linear) expression that clears every root at once.',
          examples: [
            {
              id: 'ex-1-98',
              title: 'Clearing $\\sqrt{x}$ and $\\sqrt[3]{x}$',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{dx}{\\sqrt{x}+\\sqrt[3]{x}}$.',
              goal: 'Use $t=x^{1/6}$ so both roots become integer powers of $t$.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose the LCD of the root indices',
                  why: 'Indices $2$ and $3$ share LCD $6$, so set $x=t^{6}$.',
                  calculation: 'x=t^{6},\\quad dx=6t^{5}\\,dt,\\quad \\sqrt{x}=t^{3},\\quad \\sqrt[3]{x}=t^{2}',
                },
                {
                  id: 's2',
                  title: 'Substitute',
                  why: 'The integrand becomes rational in $t$.',
                  calculation:
                    '\\int\\frac{6t^{5}}{t^{3}+t^{2}}\\,dt = 6\\int\\frac{t^{3}}{t+1}\\,dt',
                },
                {
                  id: 's3',
                  title: 'Divide and integrate',
                  why: 'Polynomial division yields terms that integrate by the table; then return to $x$.',
                  calculation:
                    '6\\int\\bigl(t^{2}-t+1-\\tfrac{1}{t+1}\\bigr)\\,dt = 2t^{3}-3t^{2}+6t-6\\ln|t+1|+C',
                  notes:
                    'Finally replace $t=x^{1/6}$ to express the answer in $x$.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'trigonometric-integrals',
      number: 8,
      title: 'Trigonometric Integrals',
      description:
        'Powers and products of sine and cosine, including Weierstrass $t=\\tan(x/2)$ when needed.',
      exercises: '1.107–1.112',
      sections: [
        {
          id: 'trig-powers',
          title: 'Powers of sine and cosine',
          summary:
            'Use identities or a $t$-substitution to reduce trig integrals to rational ones.',
          examples: [
            {
              id: 'ex-1-111',
              title: 'Odd power of sine',
              prompt: 'Evaluate $\\displaystyle \\int \\sin^{3}x\\,dx$.',
              goal: 'Save one sine for $du$ and convert the rest with $\\sin^{2}=1-\\cos^{2}$.',
              steps: [
                {
                  id: 's1',
                  title: 'Factor one sine',
                  why: 'Write $\\sin^{3}x=\\sin^{2}x\\cdot\\sin x=(1-\\cos^{2}x)\\sin x$.',
                  calculation: '\\int\\sin^{3}x\\,dx = \\int(1-\\cos^{2}x)\\sin x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Substitute $u=\\cos x$',
                  why: 'Then $du=-\\sin x\\,dx$.',
                  calculation:
                    '-\\int(1-u^{2})\\,du = -u+\\frac{u^{3}}{3}+C = -\\cos x+\\frac{\\cos^{3}x}{3}+C',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'trigonometric-applications',
      number: 9,
      title: 'Applications of Trigonometric Integrals',
      description:
        'Rational functions of sine and cosine via $t=\\tan(x/2)$ or symmetry shortcuts.',
      exercises: '1.113–1.120',
      sections: [
        {
          id: 'weierstrass',
          title: 'Weierstrass and symmetry tricks',
          summary:
            'When $R(\\sin x,\\cos x)$ is rational, a tangent half-angle substitution rationalizes the integral.',
          examples: [
            {
              id: 'ex-1-113',
              title: 'Half-angle substitution',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{dx}{\\sin x+\\cos x+3}$.',
              goal: 'Use $t=\\tan(x/2)$ to convert into a rational integral in $t$.',
              steps: [
                {
                  id: 's1',
                  title: 'Recall the Weierstrass formulas',
                  why: 'Every trig function becomes a rational expression in $t=\\tan(x/2)$.',
                  formula:
                    't=\\tan\\tfrac{x}{2},\\quad \\sin x=\\frac{2t}{1+t^{2}},\\quad \\cos x=\\frac{1-t^{2}}{1+t^{2}},\\quad dx=\\frac{2\\,dt}{1+t^{2}}',
                },
                {
                  id: 's2',
                  title: 'Substitute',
                  why: 'The denominator and differential combine into a quadratic in $t$.',
                  calculation:
                    '\\int\\frac{2\\,dt/(1+t^{2})}{\\frac{2t}{1+t^{2}}+\\frac{1-t^{2}}{1+t^{2}}+3} = \\int\\frac{2\\,dt}{-t^{2}+2t+4}',
                },
                {
                  id: 's3',
                  title: 'Complete and integrate',
                  why: 'Complete the square (or shift) to reach an arctangent.',
                  calculation:
                    '\\int\\frac{2\\,dt}{5-(t-1)^{2}} \\rightarrow \\text{arctangent in }t=\\tan(x/2)',
                  notes:
                    'The final answer can be written as $\\arctan\\bigl(\\tan(x/2)-1\\bigr)$ up to a constant factor from completing the square.',
                },
              ],
            },
            {
              id: 'ex-1-114',
              title: 'Symmetry shortcut $t=\\tan x$',
              prompt:
                'Evaluate $\\displaystyle \\int \\frac{\\sin x-\\cos x}{\\sin x+\\cos x}\\,dx$.',
              goal: 'Use the odd/even symmetry in $\\sin$ and $\\cos$ to justify $t=\\tan x$.',
              steps: [
                {
                  id: 's1',
                  title: 'Divide by $\\cos x$',
                  why: 'Writing everything in $\\tan x$ prepares a direct substitution.',
                  calculation:
                    '\\frac{\\sin x-\\cos x}{\\sin x+\\cos x} = \\frac{\\tan x-1}{\\tan x+1}',
                },
                {
                  id: 's2',
                  title: 'Set $t=\\tan x$',
                  why: 'Then $dt=\\sec^{2}x\\,dx=(1+t^{2})\\,dx$, and the integral simplifies.',
                  calculation:
                    '\\int\\frac{t-1}{(t+1)(1+t^{2})}\\cdot(1+t^{2})\\,dt = \\int\\frac{t-1}{t+1}\\,dt',
                },
                {
                  id: 's3',
                  title: 'Finish',
                  why: 'Rewrite and integrate: logarithmic answer in $\\tan x$.',
                  calculation: '\\int\\Bigl(1-\\frac{2}{t+1}\\Bigr)\\,dt = t-2\\ln|t+1|+C = \\tan x-2\\ln|\\tan x+1|+C',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
