import type { Course } from './types'

/**
 * Placeholder Integration course content.
 * Replace or extend this module (or load JSON with the same shape)
 * when real textbook chapters arrive — the UI reads only this data.
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
      id: 'fundamentals',
      number: 1,
      title: 'Fundamentals of Integration',
      description:
        'From antiderivatives to the power rule: build intuition for what an integral asks for and how basic formulas undo differentiation.',
      sections: [
        {
          id: 'antiderivatives',
          title: 'Antiderivatives & the Indefinite Integral',
          summary:
            'Learn what an antiderivative is, why the $+C$ appears, and how the indefinite integral notation packages that idea.',
          examples: [
            {
              id: 'check-antiderivative',
              title: 'Checking an antiderivative by differentiation',
              prompt:
                'Show that $F(x) = x^3 - 4x$ is an antiderivative of $f(x) = 3x^2 - 4$.',
              goal: 'Verify the definition: $F\'(x) = f(x)$.',
              steps: [
                {
                  id: 's1',
                  title: 'Recall the definition',
                  why: 'An antiderivative of $f$ is any function $F$ whose derivative is exactly $f$. Checking means differentiating $F$ and comparing.',
                  formula: "F'(x) = f(x)",
                },
                {
                  id: 's2',
                  title: 'Differentiate term by term',
                  why: 'Differentiation is linear, so we may differentiate each summand of $F$ separately using the power rule.',
                  formula: '\\frac{d}{dx}\\bigl(x^n\\bigr) = n x^{n-1}',
                  calculation: "F'(x) = 3x^{2} - 4",
                },
                {
                  id: 's3',
                  title: 'Compare with $f$',
                  why: 'If the derivative matches the given $f$, then $F$ is indeed an antiderivative.',
                  calculation: "F'(x) = 3x^{2} - 4 = f(x)",
                  notes:
                    'Any other antiderivative differs from $F$ by a constant. That is why indefinite integrals write $+C$.',
                },
              ],
            },
            {
              id: 'indefinite-power',
              title: 'Indefinite integral of a simple power',
              prompt: 'Evaluate $\\displaystyle \\int 6x^{2}\\,dx$.',
              goal: 'Apply the power rule for antiderivatives and include $+C$.',
              steps: [
                {
                  id: 's1',
                  title: 'Factor out the constant',
                  why: 'Constants pull out of integrals, which simplifies the power we need to undo.',
                  formula: '\\int c\\,g(x)\\,dx = c\\int g(x)\\,dx',
                  calculation: '\\int 6x^{2}\\,dx = 6\\int x^{2}\\,dx',
                },
                {
                  id: 's2',
                  title: 'Apply the power rule',
                  why: 'Integration of $x^n$ raises the exponent by one and divides by the new exponent — the reverse of differentiating.',
                  formula: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)',
                  calculation: '6\\int x^{2}\\,dx = 6\\cdot\\frac{x^{3}}{3}+C = 2x^{3}+C',
                },
                {
                  id: 's3',
                  title: 'State the answer',
                  why: 'Always include $+C$ for an indefinite integral: infinitely many antiderivatives differ by a constant.',
                  calculation: '\\int 6x^{2}\\,dx = 2x^{3}+C',
                },
              ],
            },
            {
              id: 'family-plus-c',
              title: 'Why $+C$ describes a whole family',
              prompt:
                'Explain why $\\displaystyle \\int 2x\\,dx = x^{2}+C$, and give two different antiderivatives of $2x$.',
              goal: 'Connect the constant of integration to a family of parallel graphs.',
              steps: [
                {
                  id: 's1',
                  title: 'Find one antiderivative',
                  why: 'Start with any function whose derivative is $2x$. The power rule gives $x^2$.',
                  calculation: '\\frac{d}{dx}\\bigl(x^{2}\\bigr) = 2x',
                },
                {
                  id: 's2',
                  title: 'Add an arbitrary constant',
                  why: 'Differentiating a constant yields zero, so $x^2+5$ and $x^2-3$ also work.',
                  calculation:
                    '\\frac{d}{dx}\\bigl(x^{2}+5\\bigr)=2x,\\quad \\frac{d}{dx}\\bigl(x^{2}-3\\bigr)=2x',
                },
                {
                  id: 's3',
                  title: 'Write the family compactly',
                  why: 'The notation $+C$ packages every vertical shift of the graph into one expression.',
                  formula: '\\int 2x\\,dx = x^{2}+C',
                  notes: 'Two concrete members: $x^{2}+5$ and $x^{2}-3$.',
                },
              ],
            },
          ],
        },
        {
          id: 'power-rule',
          title: 'Power Rule & Constant Multiples',
          summary:
            'Practice the workhorse formulas for polynomials and simple rational powers before moving to techniques.',
          examples: [
            {
              id: 'poly-indefinite',
              title: 'Integrating a polynomial term by term',
              prompt: 'Evaluate $\\displaystyle \\int \\bigl(4x^{3}-3x+7\\bigr)\\,dx$.',
              goal: 'Use linearity and the power rule on each term.',
              steps: [
                {
                  id: 's1',
                  title: 'Split the integral',
                  why: 'The integral of a sum is the sum of the integrals, so each term can be handled with the power rule.',
                  formula: '\\int\\bigl(f+g\\bigr)=\\int f+\\int g',
                  calculation:
                    '\\int(4x^{3}-3x+7)\\,dx = \\int 4x^{3}\\,dx - \\int 3x\\,dx + \\int 7\\,dx',
                },
                {
                  id: 's2',
                  title: 'Integrate each piece',
                  why: 'Apply $\\int x^n = \\frac{x^{n+1}}{n+1}$ (and $\\int k = kx$) carefully to every term.',
                  calculation:
                    '4\\cdot\\frac{x^{4}}{4} - 3\\cdot\\frac{x^{2}}{2} + 7x + C = x^{4} - \\frac{3}{2}x^{2} + 7x + C',
                },
                {
                  id: 's3',
                  title: 'Write the final antiderivative',
                  why: 'Combine into a single expression with one shared $+C$.',
                  calculation: '\\int(4x^{3}-3x+7)\\,dx = x^{4}-\\tfrac{3}{2}x^{2}+7x+C',
                },
              ],
            },
            {
              id: 'negative-exponent',
              title: 'A negative power (but not $-1$)',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{1}{x^{3}}\\,dx$.',
              goal: 'Rewrite as $x^{-3}$ and apply the power rule.',
              steps: [
                {
                  id: 's1',
                  title: 'Rewrite with a negative exponent',
                  why: 'The power rule is easiest to apply when the integrand is written as $x^n$.',
                  calculation: '\\frac{1}{x^{3}} = x^{-3}',
                },
                {
                  id: 's2',
                  title: 'Raise the exponent and divide',
                  why: 'Here $n=-3\\neq -1$, so the ordinary power rule still applies.',
                  formula: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C',
                  calculation: '\\int x^{-3}\\,dx = \\frac{x^{-2}}{-2}+C = -\\frac{1}{2x^{2}}+C',
                },
                {
                  id: 's3',
                  title: 'Optional check by differentiation',
                  why: 'Differentiating the answer should recover the original integrand.',
                  calculation:
                    "\\frac{d}{dx}\\Bigl(-\\frac{1}{2}x^{-2}\\Bigr) = -\\frac{1}{2}\\cdot(-2)x^{-3} = x^{-3} = \\frac{1}{x^{3}}",
                },
              ],
            },
            {
              id: 'root-as-power',
              title: 'Integrating a square root',
              prompt: 'Evaluate $\\displaystyle \\int \\sqrt{x}\\,dx$.',
              goal: 'Express the root as a fractional power, then integrate.',
              steps: [
                {
                  id: 's1',
                  title: 'Convert the radical',
                  why: 'Roots are fractional exponents; writing $\\sqrt{x}=x^{1/2}$ unlocks the power rule.',
                  calculation: '\\sqrt{x} = x^{1/2}',
                },
                {
                  id: 's2',
                  title: 'Apply the power rule',
                  why: 'Add one to the exponent: $\\tfrac12+1=\\tfrac32$, then divide by $\\tfrac32$.',
                  calculation:
                    '\\int x^{1/2}\\,dx = \\frac{x^{3/2}}{3/2}+C = \\frac{2}{3}x^{3/2}+C',
                },
                {
                  id: 's3',
                  title: 'Rewrite if desired',
                  why: 'Some textbooks prefer radical notation in the final answer.',
                  calculation: '\\frac{2}{3}x^{3/2}+C = \\frac{2}{3}\\sqrt{x^{3}}+C',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'techniques',
      number: 2,
      title: 'First Techniques',
      description:
        'Two standard methods that unlock many textbooks problems: substitution and integration by parts.',
      sections: [
        {
          id: 'substitution',
          title: 'Substitution ($u$-substitution)',
          summary:
            'Recognize a composition whose inner derivative appears (up to a constant), then change variables.',
          examples: [
            {
              id: 'basic-usub',
              title: 'A classic chain-rule reverse',
              prompt: 'Evaluate $\\displaystyle \\int 2x\\,(x^{2}+1)^{5}\\,dx$.',
              goal: 'Choose $u$ so that $du$ matches the remaining factor.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose the inner function',
                  why: 'The factor $(x^{2}+1)^{5}$ looks like a composition. Let the inside be $u$.',
                  calculation: 'u = x^{2}+1',
                },
                {
                  id: 's2',
                  title: 'Compute $du$',
                  why: 'Differentiating $u$ produces $2x\\,dx$, which already appears in the integrand — a perfect match.',
                  calculation: 'du = 2x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Rewrite and integrate in $u$',
                  why: 'After substitution the integral becomes a simple power of $u$.',
                  calculation: '\\int u^{5}\\,du = \\frac{u^{6}}{6}+C',
                },
                {
                  id: 's4',
                  title: 'Return to $x$',
                  why: 'Indefinite answers should be expressed in the original variable.',
                  calculation: '\\frac{(x^{2}+1)^{6}}{6}+C',
                },
              ],
            },
            {
              id: 'usub-constant-adjust',
              title: 'Adjusting for a constant factor',
              prompt: 'Evaluate $\\displaystyle \\int x\\,e^{x^{2}}\\,dx$.',
              goal: 'Introduce $u=x^{2}$ and account for the missing factor of $2$.',
              steps: [
                {
                  id: 's1',
                  title: 'Set $u$ and find $du$',
                  why: 'The exponent $x^{2}$ is a natural choice for $u$ because its derivative relates to the $x\\,dx$ factor.',
                  calculation: 'u=x^{2},\\quad du=2x\\,dx \\implies x\\,dx=\\tfrac{1}{2}du',
                },
                {
                  id: 's2',
                  title: 'Substitute',
                  why: 'Replace both the exponential and the differential so the integral is only in terms of $u$.',
                  calculation: '\\int e^{u}\\cdot\\tfrac{1}{2}\\,du = \\tfrac{1}{2}\\int e^{u}\\,du',
                },
                {
                  id: 's3',
                  title: 'Integrate the exponential',
                  why: 'The antiderivative of $e^u$ is $e^u$ itself.',
                  calculation: '\\tfrac{1}{2}e^{u}+C = \\tfrac{1}{2}e^{x^{2}}+C',
                },
              ],
            },
          ],
        },
        {
          id: 'parts',
          title: 'Integration by Parts',
          summary:
            'Undo the product rule: choose $u$ and $dv$, then apply $\\int u\\,dv = uv - \\int v\\,du$.',
          examples: [
            {
              id: 'parts-xex',
              title: 'Integrating $x e^{x}$',
              prompt: 'Evaluate $\\displaystyle \\int x e^{x}\\,dx$.',
              goal: 'Use integration by parts with a polynomial times an exponential.',
              steps: [
                {
                  id: 's1',
                  title: 'State the formula',
                  why: 'Integration by parts comes from the product rule rearranged into integral form.',
                  formula: '\\int u\\,dv = uv - \\int v\\,du',
                },
                {
                  id: 's2',
                  title: 'Choose $u$ and $dv$',
                  why: 'Let $u=x$ (it simplifies when differentiated) and $dv=e^{x}\\,dx$ (easy to integrate).',
                  calculation: 'u=x,\\quad dv=e^{x}\\,dx \\implies du=dx,\\quad v=e^{x}',
                },
                {
                  id: 's3',
                  title: 'Apply the formula',
                  why: 'Substitute into $uv-\\int v\\,du$ and integrate the remaining simpler integral.',
                  calculation: '\\int x e^{x}\\,dx = x e^{x} - \\int e^{x}\\,dx = x e^{x} - e^{x}+C',
                },
                {
                  id: 's4',
                  title: 'Factor if desired',
                  why: 'Factoring $e^{x}$ makes the structure easier to check by differentiation.',
                  calculation: 'e^{x}(x-1)+C',
                },
              ],
            },
            {
              id: 'parts-xsin',
              title: 'Integrating $x\\sin x$',
              prompt: 'Evaluate $\\displaystyle \\int x\\sin x\\,dx$.',
              goal: 'Practice parts when the trig factor is the easy piece to integrate.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose parts',
                  why: 'Again let the algebraic factor be $u$, so differentiation reduces degree.',
                  calculation: 'u=x,\\quad dv=\\sin x\\,dx \\implies du=dx,\\quad v=-\\cos x',
                },
                {
                  id: 's2',
                  title: 'Apply $\\int u\\,dv$',
                  why: 'The formula produces a boundary-style product term minus a new integral of cosine.',
                  calculation:
                    '\\int x\\sin x\\,dx = -x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\int\\cos x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Finish the cosine integral',
                  why: 'The remaining integral is standard: $\\int\\cos x\\,dx=\\sin x$.',
                  calculation: '-x\\cos x + \\sin x + C',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
