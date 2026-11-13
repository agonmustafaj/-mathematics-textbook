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
      id: 'introduction-theory',
      number: 1,
      title: 'Introduction to Integration Theory',
      description:
        'Primitive functions, the indefinite integral, and the basic table of antiderivatives.',
      exercises: '1.4–1.14',
      sections: [
        {
          id: 'basics',
          title: 'Primitive functions & the basic table',
          summary:
            'Undo differentiation with the power rule and elementary formulas, always remembering $+C$.',
          examples: [
            {
              id: 'ex-1-4',
              title: 'Power rule for $x^5$',
              prompt: 'Evaluate $\\displaystyle \\int x^{5}\\,dx$.',
              goal: 'Apply the power rule from the basic table.',
              steps: [
                {
                  id: 's1',
                  title: 'Recall the power rule',
                  why: 'For $n\\neq -1$, integrating $x^n$ raises the exponent by one and divides by the new exponent.',
                  formula: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)',
                },
                {
                  id: 's2',
                  title: 'Substitute $n=5$',
                  why: 'Here the exponent is $5$, so the antiderivative is $\\frac{x^{6}}{6}$.',
                  calculation: '\\int x^{5}\\,dx = \\frac{x^{6}}{6}+C',
                },
              ],
            },
            {
              id: 'ex-1-10',
              title: 'Linearity on a sum',
              prompt: 'Evaluate $\\displaystyle \\int\\bigl(2-3\\sin x+\\cos x\\bigr)\\,dx$.',
              goal: 'Split the integral and integrate each term with the basic table.',
              steps: [
                {
                  id: 's1',
                  title: 'Use linearity',
                  why: 'The integral of a sum is the sum of the integrals.',
                  formula: '\\int\\bigl(f+g\\bigr)=\\int f+\\int g',
                  calculation:
                    '\\int(2-3\\sin x+\\cos x)\\,dx = \\int 2\\,dx - 3\\int\\sin x\\,dx + \\int\\cos x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Integrate each piece',
                  why: 'Use $\\int 2\\,dx=2x$, $\\int\\sin x\\,dx=-\\cos x$, and $\\int\\cos x\\,dx=\\sin x$.',
                  calculation: '2x + 3\\cos x + \\sin x + C',
                },
              ],
            },
            {
              id: 'ex-1-13',
              title: 'Rewrite before integrating',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{x^{2}}{1+x^{2}}\\,dx$.',
              goal: 'Algebraically rewrite the integrand so a table formula appears.',
              steps: [
                {
                  id: 's1',
                  title: 'Split the fraction',
                  why: 'Write the numerator as $(1+x^{2})-1$ so the fraction becomes $1$ minus a standard arctangent integrand.',
                  calculation:
                    '\\frac{x^{2}}{1+x^{2}} = \\frac{(1+x^{2})-1}{1+x^{2}} = 1 - \\frac{1}{1+x^{2}}',
                },
                {
                  id: 's2',
                  title: 'Integrate',
                  why: 'Now apply $\\int 1\\,dx=x$ and $\\int\\frac{1}{1+x^{2}}\\,dx=\\arctan x$.',
                  calculation: '\\int\\frac{x^{2}}{1+x^{2}}\\,dx = x - \\arctan x + C',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'substitution',
      number: 2,
      title: 'The Substitution Method',
      description:
        'Change of variables: choose an inner function whose derivative appears in the integrand.',
      exercises: '1.16–1.29',
      sections: [
        {
          id: 'u-sub',
          title: 'Core $u$-substitutions',
          summary:
            'Recognize compositions and replace the inner expression with $u$ so the integral becomes tabular.',
          examples: [
            {
              id: 'ex-1-16',
              title: 'Linear inside a power',
              prompt: 'Evaluate $\\displaystyle \\int (2x+5)^{5}\\,dx$.',
              goal: 'Substitute the linear expression inside the power.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose $u$',
                  why: 'The inner linear piece $2x+5$ is a natural substitution.',
                  calculation: 'u = 2x+5 \\implies du = 2\\,dx \\implies dx = \\tfrac{1}{2}\\,du',
                },
                {
                  id: 's2',
                  title: 'Integrate in $u$',
                  why: 'The integral becomes a pure power of $u$.',
                  calculation:
                    '\\int u^{5}\\cdot\\tfrac{1}{2}\\,du = \\tfrac{1}{2}\\cdot\\frac{u^{6}}{6}+C = \\frac{u^{6}}{12}+C',
                },
                {
                  id: 's3',
                  title: 'Return to $x$',
                  why: 'Replace $u$ with $2x+5$.',
                  calculation: '\\frac{(2x+5)^{6}}{12}+C',
                },
              ],
            },
            {
              id: 'ex-1-18',
              title: 'Derivative in the numerator',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{2x}{1+x^{2}}\\,dx$.',
              goal: 'Match the numerator with the derivative of the denominator.',
              steps: [
                {
                  id: 's1',
                  title: 'Set $u=1+x^{2}$',
                  why: 'Then $du=2x\\,dx$, which is exactly the remaining factor.',
                  calculation: 'u=1+x^{2},\\quad du=2x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Integrate',
                  why: 'The integral collapses to $\\int\\frac{1}{u}\\,du$.',
                  calculation: '\\int\\frac{1}{u}\\,du = \\ln|u|+C = \\ln|1+x^{2}|+C',
                },
              ],
            },
            {
              id: 'ex-1-22',
              title: 'Trigonometric substitution pattern',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{\\cos x}{4+\\sin x}\\,dx$.',
              goal: 'Let $u$ be the expression whose derivative is in the numerator.',
              steps: [
                {
                  id: 's1',
                  title: 'Choose $u=4+\\sin x$',
                  why: 'Differentiating gives $\\cos x\\,dx$, matching the numerator.',
                  calculation: 'u=4+\\sin x,\\quad du=\\cos x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Finish',
                  why: 'Again we obtain a logarithm.',
                  calculation: '\\int\\frac{1}{u}\\,du = \\ln|4+\\sin x|+C',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'substitution-applications',
      number: 3,
      title: 'Applications of the Substitution Method',
      description:
        'Harder substitutions: completing the square, trig products, and nested forms.',
      exercises: '1.30–1.56',
      sections: [
        {
          id: 'advanced-sub',
          title: 'Completing the square & trig products',
          summary:
            'Prepare the integrand first, then substitute so arcsine, arctangent, or logarithms appear.',
          examples: [
            {
              id: 'ex-1-31',
              title: 'Complete the square, then substitute',
              prompt: 'Evaluate $\\displaystyle \\int \\frac{dx}{x^{2}+2x+2}$.',
              goal: 'Rewrite the quadratic as a sum of squares, then use arctangent.',
              steps: [
                {
                  id: 's1',
                  title: 'Complete the square',
                  why: 'The middle term $2x$ suggests $(x+1)^{2}$.',
                  calculation: 'x^{2}+2x+2 = (x+1)^{2}+1',
                },
                {
                  id: 's2',
                  title: 'Substitute $u=x+1$',
                  why: 'The integral becomes the standard arctangent form.',
                  calculation:
                    '\\int\\frac{du}{u^{2}+1} = \\arctan u + C = \\arctan(x+1)+C',
                },
              ],
            },
            {
              id: 'ex-1-47',
              title: 'Product-to-sum for cosines',
              prompt: 'Evaluate $\\displaystyle \\int \\cos 3x\\,\\cos 5x\\,dx$.',
              goal: 'Use a product-to-sum identity, then integrate term by term.',
              steps: [
                {
                  id: 's1',
                  title: 'Apply the identity',
                  why: 'Products of cosines become a sum of cosines of sum and difference angles.',
                  formula: '\\cos A\\cos B = \\tfrac12\\bigl(\\cos(A+B)+\\cos(A-B)\\bigr)',
                  calculation:
                    '\\cos 3x\\cos 5x = \\tfrac12\\bigl(\\cos 8x+\\cos(-2x)\\bigr) = \\tfrac12(\\cos 8x+\\cos 2x)',
                },
                {
                  id: 's2',
                  title: 'Integrate',
                  why: 'Each cosine integrates with a constant factor.',
                  calculation:
                    '\\tfrac12\\int(\\cos 8x+\\cos 2x)\\,dx = \\tfrac{1}{16}\\sin 8x + \\tfrac{1}{4}\\sin 2x + C',
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
              id: 'ex-1-57',
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
              id: 'ex-1-58',
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
              id: 'ex-1-60',
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
            {
              id: 'ex-1-61',
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
              id: 'ex-1-63',
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
