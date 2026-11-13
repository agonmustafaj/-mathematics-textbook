import type { Course } from './types'

/**
 * Albanian (sq) Integration course — same ids as English for stable routes.
 * Chapter titles match the EN module; exercise ranges are authoring metadata only.
 */
export const integrationCourseSq: Course = {
  id: 'integration',
  brand: 'Mathh',
  title: 'Integrimi',
  subtitle:
    'Një rrugë e qetë, hap pas hapi, nëpër idetë që nxënësit i takojnë për herë të parë kur nisin integrimin.',
  topic: 'Kalkulus · Antiderivatet dhe integralet e caktuara',
  chapters: [
    {
      id: "introduction-theory",
      number: 1,
      title: "Hyrje në Teorinë e Integrimit",
      description: "Funksionet primitive, integrali i pacaktuar dhe tabela bazë e antiderivateve.",
      exercises: "1.4–1.14",
      sections: [
        {
          id: "basics",
          title: "Funksionet primitive dhe tabela bazë",
          summary: "Përdorni rregullën e fuqisë dhe formulat elementare të antiderivateve, duke përfshirë gjithmonë $+C$.",
          examples: [
            {
              id: "1.4",
              title: "Rregulla e fuqisë për $x^5$",
              prompt: "Llogaritni $\\displaystyle \\int x^{5}\\,dx$.",
              goal: "Përdorni rregullën e fuqisë nga tabela bazë.",
              steps: [
                {
                  id: "s1",
                  title: "Kujtoni rregullën e fuqisë",
                  why: "Për $n\\neq -1$, integrimi i $x^n$ e rrit eksponentin me një dhe e pjesëton me eksponentin e ri.",
                  formula: "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $n=5$",
                  why: "Këtu eksponenti është $5$, prandaj antiderivata është $\\frac{x^{6}}{6}$.",
                  calculation: "\\int x^{5}\\,dx = \\frac{x^{6}}{6}+C",
                },
                {
                  id: "s3",
                  title: "Kontroll opsional",
                  why: "Derivoni përgjigjen: $\\frac{d}{dx}\\bigl(\\frac{x^{6}}{6}\\bigr)=x^{5}$.",
                  notes: "Gjithmonë mbani $+C$ për një integral të pacaktuar.",
                },
              ],
            },
            {
              id: "1.5",
              title: "Fuqi negative $x^{-2}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{1}{x^{2}}\\,dx$.",
              goal: "Rishkruani si fuqi dhe përdorni rregullën e fuqisë.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani integrandën",
                  why: "Shkruani $\\frac{1}{x^{2}}$ si $x^{-2}$ që rregulla e fuqisë të zbatohet drejtpërdrejt.",
                  calculation: "\\frac{1}{x^{2}} = x^{-2}",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "Përdorni $n=-2$: ngrini në $-1$ dhe pjesëtoni me $-1$.",
                  formula: "\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C",
                  calculation: "\\int x^{-2}\\,dx = \\frac{x^{-1}}{-1}+C = -\\frac{1}{x}+C",
                },
                {
                  id: "s3",
                  title: "Kontrolloni me derivim",
                  why: "$\\frac{d}{dx}\\bigl(-x^{-1}\\bigr)=x^{-2}=\\frac{1}{x^{2}}$.",
                },
              ],
            },
            {
              id: "1.6",
              title: "Integrimi i $x^{-3/2}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{1}{x\\sqrt{x}}\\,dx$.",
              goal: "Shprehni rrënjën si fuqi thyesore, pastaj integroni.",
              steps: [
                {
                  id: "s1",
                  title: "Ktheni në një fuqi të vetme",
                  why: "$x\\sqrt{x}=x\\cdot x^{1/2}=x^{3/2}$, pra integranda është $x^{-3/2}$.",
                  calculation: "\\frac{1}{x\\sqrt{x}} = x^{-3/2}",
                },
                {
                  id: "s2",
                  title: "Përdorni rregullën e fuqisë",
                  why: "$n=-\\tfrac32$: eksponenti i ri është $-\\tfrac12$; pjesëtoni me $-\\tfrac12$.",
                  calculation: "\\int x^{-3/2}\\,dx = \\frac{x^{-1/2}}{-1/2}+C = -2x^{-1/2}+C = -\\frac{2}{\\sqrt{x}}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int \\frac{1}{x\\sqrt{x}}\\,dx = -\\frac{2}{\\sqrt{x}}+C$.",
                },
              ],
            },
            {
              id: "1.7",
              title: "Shumë me $1/x$",
              prompt: "Llogaritni $\\displaystyle \\int \\Bigl(\\frac{1}{x}-3\\Bigr)\\,dx$.",
              goal: "Përdorni linearitetin dhe formulën e logaritmit.",
              steps: [
                {
                  id: "s1",
                  title: "Ndani integralin",
                  why: "Integroni çdo term veçmas.",
                  calculation: "\\int\\Bigl(\\frac{1}{x}-3\\Bigr)\\,dx = \\int\\frac{1}{x}\\,dx - 3\\int 1\\,dx",
                },
                {
                  id: "s2",
                  title: "Përdorni formulat standarde",
                  why: "$\\int\\frac{1}{x}\\,dx=\\ln|x|$ dhe $\\int 1\\,dx=x$.",
                  calculation: "\\ln|x| - 3x + C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen përfundimtare",
                  why: "$\\displaystyle \\int\\bigl(\\frac{1}{x}-3\\bigr)\\,dx = \\ln|x|-3x+C$.",
                },
              ],
            },
            {
              id: "1.8",
              title: "Rishkrim algjebrik i një thyese eksponenciale",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{e^{2x}-1}{e^{x}+1}\\,dx$.",
              goal: "Thjeshtoni thyesën para se të integroni.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni numëruesin",
                  why: "$e^{2x}-1=(e^{x}-1)(e^{x}+1)$.",
                  calculation: "\\frac{e^{2x}-1}{e^{x}+1} = \\frac{(e^{x}-1)(e^{x}+1)}{e^{x}+1} = e^{x}-1",
                },
                {
                  id: "s2",
                  title: "Integroni formën e thjeshtuar",
                  why: "Tani integrali është elementar.",
                  calculation: "\\int(e^{x}-1)\\,dx = e^{x}-x+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{e^{2x}-1}{e^{x}+1}\\,dx = e^{x}-x+C$.",
                },
              ],
            },
            {
              id: "1.9",
              title: "Eksponenciale me bazë $5/3$",
              prompt: "Llogaritni $\\displaystyle \\int 5^{x}3^{-x}\\,dx$.",
              goal: "Bashkoni bazat, pastaj përdorni $\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}+C$.",
              steps: [
                {
                  id: "s1",
                  title: "Bashkoni bazat",
                  why: "$5^{x}3^{-x}=(5/3)^{x}$.",
                  calculation: "5^{x}3^{-x} = \\Bigl(\\frac{5}{3}\\Bigr)^{x}",
                },
                {
                  id: "s2",
                  title: "Integroni eksponencialen",
                  why: "Për $a>0$, $a\\neq 1$: $\\int a^{x}\\,dx=\\frac{a^{x}}{\\ln a}+C$.",
                  formula: "\\int a^{x}\\,dx = \\frac{a^{x}}{\\ln a}+C",
                  calculation: "\\int\\Bigl(\\frac{5}{3}\\Bigr)^{x}\\,dx = \\frac{(5/3)^{x}}{\\ln(5/3)}+C = \\frac{5^{x}}{3^{x}\\ln(5/3)}+C",
                },
                {
                  id: "s3",
                  title: "Formë ekuivalente",
                  why: "Me $\\ln(5/3)=\\ln 5-\\ln 3$, mund të shkruani edhe $\\frac{5^{x}}{3^{x}(\\ln 5-\\ln 3)}+C$.",
                },
              ],
            },
            {
              id: "1.10",
              title: "Lineariteti mbi një shumë",
              prompt: "Llogaritni $\\displaystyle \\int\\bigl(2-3\\sin x+\\cos x\\bigr)\\,dx$.",
              goal: "Ndani dhe integroni çdo term me tabelën bazë.",
              steps: [
                {
                  id: "s1",
                  title: "Përdorni linearitetin",
                  why: "Integrali i një shume është shuma e integraleve.",
                  calculation: "\\int(2-3\\sin x+\\cos x)\\,dx = \\int 2\\,dx - 3\\int\\sin x\\,dx + \\int\\cos x\\,dx",
                },
                {
                  id: "s2",
                  title: "Integroni çdo pjesë",
                  why: "$\\int 2\\,dx=2x$, $\\int\\sin x\\,dx=-\\cos x$, $\\int\\cos x\\,dx=\\sin x$.",
                  calculation: "2x + 3\\cos x + \\sin x + C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int(2-3\\sin x+\\cos x)\\,dx = 2x+3\\cos x+\\sin x+C$.",
                },
              ],
            },
            {
              id: "1.11",
              title: "Integrimi i $\\tan^{2}x$",
              prompt: "Llogaritni $\\displaystyle \\int \\tan^{2}x\\,dx$.",
              goal: "Përdorni $1+\\tan^{2}x=\\sec^{2}x$ për ta kthyer në integral tabelor.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani me identitetin e Pitagorës",
                  why: "$\\tan^{2}x=\\sec^{2}x-1$.",
                  formula: "1+\\tan^{2}x=\\sec^{2}x",
                  calculation: "\\tan^{2}x = \\sec^{2}x - 1",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int\\sec^{2}x\\,dx=\\tan x$ dhe $\\int 1\\,dx=x$.",
                  calculation: "\\int(\\sec^{2}x-1)\\,dx = \\tan x - x + C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\tan^{2}x\\,dx = \\tan x - x + C$.",
                },
              ],
            },
            {
              id: "1.12",
              title: "Integrimi i $\\cot^{2}x$",
              prompt: "Llogaritni $\\displaystyle \\int \\cot^{2}x\\,dx$.",
              goal: "Përdorni $1+\\cot^{2}x=\\csc^{2}x$.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani",
                  why: "$\\cot^{2}x=\\csc^{2}x-1$.",
                  calculation: "\\cot^{2}x = \\csc^{2}x - 1",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int\\csc^{2}x\\,dx=-\\cot x$.",
                  calculation: "\\int(\\csc^{2}x-1)\\,dx = -\\cot x - x + C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\cot^{2}x\\,dx = -\\cot x - x + C$.",
                },
              ],
            },
            {
              id: "1.13",
              title: "Rishkruani $\\frac{x^{2}}{1+x^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}}{1+x^{2}}\\,dx$.",
              goal: "Rishkruani algjebrikisht që të shfaqet arktangjenti.",
              steps: [
                {
                  id: "s1",
                  title: "Ndani thyesën",
                  why: "Shkruani numëruesin si $(1+x^{2})-1$.",
                  calculation: "\\frac{x^{2}}{1+x^{2}} = 1 - \\frac{1}{1+x^{2}}",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int 1\\,dx=x$ dhe $\\int\\frac{1}{1+x^{2}}\\,dx=\\arctan x$.",
                  calculation: "x - \\arctan x + C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{x^{2}}{1+x^{2}}\\,dx = x-\\arctan x+C$.",
                },
              ],
            },
            {
              id: "1.14",
              title: "Arksinus minus një logaritëm",
              prompt: "Llogaritni $\\displaystyle \\int\\Bigl(\\frac{3}{\\sqrt{1-x^{2}}}-\\frac{1}{\\sqrt{1+x^{2}}}\\Bigr)\\,dx$.",
              goal: "Njohni dy integrale standarde të tabelës.",
              steps: [
                {
                  id: "s1",
                  title: "Ndani integralin",
                  why: "Trajtoni çdo term me formulën e vet.",
                  calculation: "3\\int\\frac{dx}{\\sqrt{1-x^{2}}} - \\int\\frac{dx}{\\sqrt{1+x^{2}}}",
                },
                {
                  id: "s2",
                  title: "Përdorni formulat",
                  why: "$\\int\\frac{dx}{\\sqrt{1-x^{2}}}=\\arcsin x$ dhe $\\int\\frac{dx}{\\sqrt{1+x^{2}}}=\\ln\\bigl|x+\\sqrt{1+x^{2}}\\bigr|$.",
                  calculation: "3\\arcsin x - \\ln\\bigl|x+\\sqrt{1+x^{2}}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
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
      title: "Metoda e Zëvendësimit",
      description: "Ndryshimi i ndryshores: zgjidhni funksionin e brendshëm derivati i të cilit shfaqet në integrandë.",
      exercises: "1.16–1.29",
      sections: [
        {
          id: "u-sub",
          title: "Zëvendësimet bazë me $u$",
          summary: "Njohni kompozimet dhe zëvendësoni shprehjen e brendshme me $u$ që integrali të bëhet tabelor.",
          examples: [
            {
              id: "1.16",
              title: "Shprehje lineare brenda një fuqie",
              prompt: "Llogaritni $\\displaystyle \\int (x+2)^{5}\\,dx$.",
              goal: "Zëvendësoni shprehjen lineare brenda fuqisë.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni $u=x+2$",
                  why: "Pjesa lineare e brendshme është një zëvendësim natyror.",
                  calculation: "u=x+2 \\implies du=dx",
                },
                {
                  id: "s2",
                  title: "Integroni në $u$",
                  why: "Integrali bëhet një fuqi e pastër e $u$.",
                  calculation: "\\int u^{5}\\,du = \\frac{u^{6}}{6}+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Zëvendësoni $u$ me $x+2$.",
                  calculation: "\\frac{(x+2)^{6}}{6}+C",
                },
              ],
            },
            {
              id: "1.17",
              title: "Integrali i $1/(2x+7)$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{2x+7}$.",
              goal: "Përdorni një zëvendësim linear për të arritur një logaritëm.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni $u=2x+7$",
                  why: "Atëherë $du=2\\,dx$, pra $dx=\\tfrac12\\,du$.",
                  calculation: "u=2x+7,\\quad dx=\\tfrac12\\,du",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni dhe integroni",
                  why: "$\\int\\frac{1}{u}\\cdot\\tfrac12\\,du=\\tfrac12\\ln|u|+C$.",
                  calculation: "\\tfrac12\\ln|2x+7|+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{2x+7}=\\frac12\\ln|2x+7|+C$.",
                },
              ],
            },
            {
              id: "1.18",
              title: "Derivati në numërues",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{2x}{1+x^{2}}\\,dx$.",
              goal: "Përputhni numëruesin me derivatin e emëruesit.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni $u=1+x^{2}$",
                  why: "Atëherë $du=2x\\,dx$.",
                  calculation: "u=1+x^{2},\\quad du=2x\\,dx",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int\\frac{1}{u}\\,du=\\ln|u|+C$.",
                  calculation: "\\ln|1+x^{2}|+C",
                },
                {
                  id: "s3",
                  title: "Shënim",
                  why: "Me $1+x^{2}>0$, vlera absolute mund të hiqet: $\\ln(1+x^{2})+C$.",
                },
              ],
            },
            {
              id: "1.19",
              title: "Rrënja kubike e një shprehjeje lineare",
              prompt: "Llogaritni $\\displaystyle \\int (3x+4)^{1/3}\\,dx$.",
              goal: "Zëvendësoni brendësinë e rrënjës/fuqisë.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni $u=3x+4$",
                  why: "Atëherë $du=3\\,dx$, pra $dx=\\tfrac13\\,du$.",
                  calculation: "u=3x+4,\\quad dx=\\tfrac13\\,du",
                },
                {
                  id: "s2",
                  title: "Integroni fuqinë",
                  why: "$\\int u^{1/3}\\cdot\\tfrac13\\,du=\\tfrac13\\cdot\\frac{u^{4/3}}{4/3}+C=\\frac{u^{4/3}}{4}+C$.",
                  calculation: "\\frac{(3x+4)^{4/3}}{4}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int(3x+4)^{1/3}\\,dx=\\frac{(3x+4)^{4/3}}{4}+C$.",
                },
              ],
            },
            {
              id: "1.20",
              title: "Arktangent pas $u=e^{x}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{e^{x}}{1+e^{2x}}\\,dx$.",
              goal: "Zëvendësoni $u=e^{x}$ për të arritur $\\arctan$.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni $u=e^{x}$",
                  why: "Atëherë $du=e^{x}\\,dx$.",
                  calculation: "u=e^{x},\\quad du=e^{x}\\,dx",
                },
                {
                  id: "s2",
                  title: "Rishkruani integralin",
                  why: "$\\int\\frac{du}{1+u^{2}}=\\arctan u+C$.",
                  calculation: "\\arctan(e^{x})+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{e^{x}}{1+e^{2x}}\\,dx=\\arctan(e^{x})+C$.",
                },
              ],
            },
            {
              id: "1.21",
              title: "Eksponencialja e $x^{4}$",
              prompt: "Llogaritni $\\displaystyle \\int x^{3} a^{x^{4}}\\,dx$ për $a>0$, $a\\\\neq 1$.",
              goal: "Lejoni $u=x^{4}$ që $du$ të përputhet me $x^{3}\\,dx$.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni $u=x^{4}$",
                  why: "Atëherë $du=4x^{3}\\,dx$, pra $x^{3}\\,dx=\\tfrac14\\,du$.",
                  calculation: "u=x^{4},\\quad x^{3}\\,dx=\\tfrac14\\,du",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int a^{u}\\cdot\\tfrac14\\,du=\\frac{a^{u}}{4\\ln a}+C$.",
                  calculation: "\\frac{a^{x^{4}}}{4\\ln a}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int x^{3}a^{x^{4}}\\,dx=\\frac{a^{x^{4}}}{4\\ln a}+C$.",
                },
              ],
            },
            {
              id: "1.22",
              title: "Model logaritmik trigonometrik",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{\\\\cos x}{4+\\\\sin x}\\,dx$.",
              goal: "Lejoni që $u$ të jetë shprehja derivati i së cilës është në numërues.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni $u=4+\\sin x$",
                  why: "Atëherë $du=\\cos x\\,dx$.",
                  calculation: "u=4+\\sin x,\\quad du=\\cos x\\,dx",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int\\frac{1}{u}\\,du=\\ln|u|+C$.",
                  calculation: "\\ln|4+\\sin x|+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{\\cos x}{4+\\sin x}\\,dx=\\ln|4+\\sin x|+C$.",
                },
              ],
            },
            {
              id: "1.23",
              title: "Integrimi i $\\sin^{2}x$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\sin^{2}x\\,dx$.",
              goal: "Përdorni një identitet me kënd të dyfishtë, pastaj integroni.",
              steps: [
                {
                  id: "s1",
                  title: "Përdorni identitetin",
                  why: "$\\sin^{2}x=\\frac{1-\\cos 2x}{2}$.",
                  formula: "\\sin^{2}x=\\frac{1-\\cos 2x}{2}",
                  calculation: "\\int\\sin^{2}x\\,dx = \\int\\frac{1-\\cos 2x}{2}\\,dx",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int\\cos 2x\\,dx=\\tfrac12\\sin 2x$.",
                  calculation: "\\frac{x}{2}-\\frac{\\sin 2x}{4}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\sin^{2}x\\,dx=\\frac{x}{2}-\\frac{\\sin 2x}{4}+C$.",
                },
              ],
            },
            {
              id: "1.24",
              title: "Fuqi tek e kosinusit",
              prompt: "Llogaritni $\\displaystyle \\int \\\\cos^{3}x\\,dx$.",
              goal: "Ruani një kosinus për $du$ dhe konvertoni pjesën tjetër me $\\cos^{2}=1-\\sin^{2}$.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni një kosinus",
                  why: "$\\cos^{3}x=\\cos^{2}x\\cdot\\cos x=(1-\\sin^{2}x)\\cos x$.",
                  calculation: "\\int\\cos^{3}x\\,dx=\\int(1-\\sin^{2}x)\\cos x\\,dx",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $u=\\sin x$",
                  why: "Atëherë $du=\\cos x\\,dx$.",
                  calculation: "\\int(1-u^{2})\\,du = u-\\frac{u^{3}}{3}+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\sin x-\\frac{\\sin^{3}x}{3}+C$.",
                  calculation: "\\sin x-\\frac{\\sin^{3}x}{3}+C",
                },
              ],
            },
            {
              id: "1.25",
              title: "Forma e arksinusit $\\sqrt{b^{2}-a^{2}x^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{b^{2}-a^{2}x^{2}}}$ për $a,b>0$.",
              goal: "Rishkallëzoni te integrali standard i arksinusit.",
              steps: [
                {
                  id: "s1",
                  title: "Nxirrni $b$ nga rrënja",
                  why: "Shkruani $\\sqrt{b^{2}-a^{2}x^{2}}=b\\sqrt{1-(ax/b)^{2}}$.",
                  calculation: "\\int\\frac{dx}{b\\sqrt{1-(ax/b)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=ax/b$",
                  why: "Atëherë $dx=(b/a)\\,dt$.",
                  calculation: "\\frac{1}{a}\\int\\frac{dt}{\\sqrt{1-t^{2}}} = \\frac{1}{a}\\arcsin t + C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\frac{1}{a}\\arcsin\\bigl(\\frac{ax}{b}\\bigr)+C$.",
                  calculation: "\\frac{1}{a}\\arcsin\\Bigl(\\frac{ax}{b}\\Bigr)+C",
                },
              ],
            },
            {
              id: "1.26",
              title: "Forma logaritmike $\\sqrt{a^{2}x^{2}\\pm b^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{a^{2}x^{2}\\\\pm b^{2}}}$ për $a,b>0$.",
              goal: "Rishkallëzoni te $\\int\\frac{dt}{\\sqrt{t^{2}\\pm 1}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Nxirrni $a$ nga rrënja",
                  why: "$\\sqrt{a^{2}x^{2}\\pm b^{2}}=a\\sqrt{x^{2}\\pm (b/a)^{2}}$.",
                  calculation: "\\frac{1}{a}\\int\\frac{dx}{\\sqrt{x^{2}\\pm (b/a)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=ax/b$",
                  why: "Reduktoni te $\\int\\frac{dt}{\\sqrt{t^{2}\\pm 1}}$.",
                  formula: "\\int\\frac{dt}{\\sqrt{t^{2}\\pm 1}}=\\ln\\bigl|t+\\sqrt{t^{2}\\pm 1}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\frac{1}{a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}\\pm b^{2}}\\bigr|+C$ (me një konstante të përthithur).",
                  calculation: "\\frac{1}{a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}\\pm b^{2}}\\bigr|+C",
                },
              ],
            },
            {
              id: "1.27",
              title: "Forma e arktangjentit $b^{2}+a^{2}x^{2}$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{b^{2}+a^{2}x^{2}}$ për $a,b>0$.",
              goal: "Rishkallëzoni te integrali standard i arktangjentit.",
              steps: [
                {
                  id: "s1",
                  title: "Nxirrni $b^{2}$",
                  why: "Shkruani $b^{2}+a^{2}x^{2}=b^{2}\\bigl(1+(ax/b)^{2}\\bigr)$.",
                  calculation: "\\int\\frac{dx}{b^{2}\\bigl(1+(ax/b)^{2}\\bigr)}",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=ax/b$",
                  why: "Atëherë $dx=(b/a)\\,dt$.",
                  calculation: "\\frac{1}{ab}\\int\\frac{dt}{1+t^{2}} = \\frac{1}{ab}\\arctan t + C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\frac{1}{ab}\\arctan\\bigl(\\frac{ax}{b}\\bigr)+C$.",
                  calculation: "\\frac{1}{ab}\\arctan\\Bigl(\\frac{ax}{b}\\Bigr)+C",
                },
              ],
            },
            {
              id: "1.28",
              title: "Struktura e pjesshme për $1/(x^{2}-1)$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{x^{2}-1}$.",
              goal: "Faktorizoni dhe përdorni një diferencë logaritmesh.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni emëruesin",
                  why: "$x^{2}-1=(x-1)(x+1)$.",
                  calculation: "\\frac{1}{x^{2}-1}=\\frac{1/2}{x-1}-\\frac{1/2}{x+1}",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "Çdo term është logaritëm.",
                  calculation: "\\tfrac12\\ln|x-1|-\\tfrac12\\ln|x+1|+C=\\tfrac12\\ln\\Bigl|\\frac{x-1}{x+1}\\Bigr|+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{x^{2}-1}=\\frac12\\ln\\bigl|\\frac{x-1}{x+1}\\bigr|+C$.",
                },
              ],
            },
            {
              id: "1.29",
              title: "Forma logaritmike $\\sqrt{a^{2}x^{2}-b^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{a^{2}x^{2}-b^{2}}}$ për $a,b>0$ dhe $|ax|>b$.",
              goal: "Rishkallëzoni te $\\int\\frac{dt}{\\sqrt{t^{2}-1}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Nxirrni $a$",
                  why: "$\\sqrt{a^{2}x^{2}-b^{2}}=a\\sqrt{x^{2}-(b/a)^{2}}$.",
                  calculation: "\\frac{1}{a}\\int\\frac{dx}{\\sqrt{x^{2}-(b/a)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=ax/b$",
                  why: "Reduktoni te forma standarde logaritmike.",
                  formula: "\\int\\frac{dt}{\\sqrt{t^{2}-1}}=\\ln\\bigl|t+\\sqrt{t^{2}-1}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
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
      title: "Zbatime të Metodës së Zëvendësimit",
      description: "Zëvendësime më të vështira: plotësimi i katrorit, produkte trigonometrike dhe forma të ndërthurura.",
      exercises: "1.30–1.56",
      sections: [
        {
          id: "advanced-sub",
          title: "Plotësimi i katrorit, rrënjët dhe produktet trigonometrike",
          summary: "Përgatitni integrandën, zëvendësoni dhe reduktoni te formulat e tabelës (log, arctan, arcsin, ulje fuqie).",
          examples: [
            {
              id: "1.30",
              title: "Integrali $1/(ax^{2}+bx+c)$ me plotësim të katrorit",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{ax^{2}+bx+c}$ for $a>0$, treating the cases $\\Delta=b^{2}-4ac>0$ and $\\Delta<0$.",
              goal: "Plotësoni katrorin, rishkallëzoni dhe reduktoni te një formë logaritmike ose arktangjenti.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "Nxirrni $a$ dhe rishkruani the quadratic as a shifted square plus a constant involving $\\Delta=b^{2}-4ac$.",
                  calculation: "ax^{2}+bx+c=a\\Bigl(\\bigl(x+\\tfrac{b}{2a}\\bigr)^{2}-\\tfrac{\\Delta}{4a^{2}}\\Bigr)",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $t=x+b/(2a)$",
                  why: "Integrali bëhet a constant times $\\int\\frac{dt}{t^{2}\\pm k^{2}}$.",
                },
                {
                  id: "s3",
                  title: "Rasti $\\Delta>0$",
                  why: "Atëherë shfaqet $t^{2}-k^{2}$ and the antiderivative is logarithmic:",
                  formula: "\\int\\frac{dt}{t^{2}-k^{2}}=\\frac{1}{2k}\\ln\\Bigl|\\frac{t-k}{t+k}\\Bigr|+C",
                },
                {
                  id: "s4",
                  title: "Rasti $\\Delta<0$",
                  why: "Atëherë shfaqet $t^{2}+k^{2}$ and the antiderivative is an arctangent:",
                  formula: "\\int\\frac{dt}{t^{2}+k^{2}}=\\frac{1}{k}\\arctan\\frac{t}{k}+C",
                  notes: "Kthehuni te $x$ duke zëvendësuar $t=x+\\frac{b}{2a}$ and $k=\\sqrt{|\\Delta|}/(2a)$.",
                },
              ],
            },
            {
              id: "1.31",
              title: "Plotësoni katrorin për $x^{2}+2x+2$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{2}+2x+2}$.",
              goal: "Plotësoni katrorin, pastaj përdorni arktangjentin.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$x^{2}+2x+2=(x+1)^{2}+1$.",
                  calculation: "x^{2}+2x+2=(x+1)^{2}+1",
                },
                {
                  id: "s2",
                  title: "Vendosni $u=x+1$",
                  why: "Atëherë $du=dx$.",
                  calculation: "\\int\\frac{du}{u^{2}+1}=\\arctan u+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\arctan(x+1)+C$.",
                  calculation: "\\arctan(x+1)+C",
                },
              ],
            },
            {
              id: "1.32",
              title: "Formë logaritmike pas plotësimit të katrorit",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{2}+2x-1}$.",
              goal: "Plotësoni katrorin për të arritur një diferencë katrorësh.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$x^{2}+2x-1=(x+1)^{2}-2$.",
                  calculation: "x^{2}+2x-1=(x+1)^{2}-2",
                },
                {
                  id: "s2",
                  title: "Vendosni $u=x+1$",
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
              title: "Lineare mbi kuadratike",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{ax+b}{ax^{2}+bx+c}\\,dx$ when the coefficients match so the numerator is nearly the derivative of the denominator (general pattern with parameters $a,b,c$).",
              goal: "Ndani në një pjesë derivat-i-emëruesit plus një mbetje si te ushtrimi 1.30.",
              steps: [
                {
                  id: "s1",
                  title: "Krahasoni me derivatin",
                  why: "Derivati i $ax^{2}+bx+c$ is $2ax+b$. Rishkruani numëruesin as a multiple of that derivative plus a constant.",
                  calculation: "ax+b=\\alpha(2ax+b)+\\beta",
                },
                {
                  id: "s2",
                  title: "Ndani integralin",
                  why: "Një pjesë bëhet $\\alpha\\int\\frac{d(ax^{2}+bx+c)}{ax^{2}+bx+c}=\\alpha\\ln|ax^{2}+bx+c|$.",
                },
                {
                  id: "s3",
                  title: "Trajtoni mbetjen",
                  why: "Konstantja e mbetur over the quadratic is reduced by completing the square exactly as in 1.30.",
                  notes: "Ky është zbërthimi standard “log + arctan/log” decomposition for linear-over-quadratic integrands.",
                },
              ],
            },
            {
              id: "1.34",
              title: "Polinom mbi një kuadratike",
              prompt: "Shpjegoni si të llogaritni $\\displaystyle \\int \\frac{P_{n}(x)}{ax^{2}+bx+c}\\,dx$ when $\\\\deg P_{n}\\\\ge 2$.",
              goal: "Së pari pjesëtoni polinomet, pastaj integroni mbetjen e duhur.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtimi i polinomeve",
                  why: "Shkruani $P_{n}(x)=Q_{n-2}(x)(ax^{2}+bx+c)+Rx+S$.",
                  calculation: "\\frac{P_{n}(x)}{ax^{2}+bx+c}=Q_{n-2}(x)+\\frac{Rx+S}{ax^{2}+bx+c}",
                },
                {
                  id: "s2",
                  title: "Integroni the quotient",
                  why: "$\\int Q_{n-2}(x)\\,dx$ është shumë e integraleve tabelore të fuqive.",
                },
                {
                  id: "s3",
                  title: "Integroni the remainder",
                  why: "Reduktoni $\\int\\frac{Rx+S}{ax^{2}+bx+c}\\,dx$ using the method of 1.33 / 1.30.",
                  notes: "Pas pjesëtimit pjesa e vështirë is always linear-over-quadratic.",
                },
              ],
            },
            {
              id: "1.35",
              title: "Pjesëtim i gjatë pastaj plotësim i katrorit",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{6}+5x^{4}+7x^{2}+3x+9}{x^{2}+2x+6}\\,dx$ (book form with the given numerator/denominator pair).",
              goal: "Pjesëtoni, integroni herësin polinomial, pastaj trajtoni mbetjen lineare.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni polinomet",
                  why: "Merrni një herës të shkallës 4 plus a linear remainder over $x^{2}+2x+6$.",
                },
                {
                  id: "s2",
                  title: "Integroni the quotient term by term",
                  why: "Çdo fuqi integrohet me rregullën e fuqisë.",
                },
                {
                  id: "s3",
                  title: "Trajtoni mbetjen",
                  why: "Plotësoni katrorin te $x^{2}+2x+6=(x+1)^{2}+5$ and finish with a logarithm and an arctangent.",
                  notes: "Përgjigja përfundimtare e librit combines a polynomial, $\\ln(x^{2}+2x+6)$, and an $\\arctan$ term.",
                },
              ],
            },
            {
              id: "1.36",
              title: "Arksinus për $\\sqrt{4-x^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\\\sqrt{4-x^{2}}}$.",
              goal: "Njohni një integral të shkallëzuar të arksinusit.",
              steps: [
                {
                  id: "s1",
                  title: "Nxirrni 4 inside the root",
                  why: "$\\sqrt{4-x^{2}}=2\\sqrt{1-(x/2)^{2}}$.",
                  calculation: "\\int\\frac{dx}{2\\sqrt{1-(x/2)^{2}}}",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=x/2$",
                  why: "Atëherë $dx=2\\,dt$.",
                  calculation: "\\int\\frac{dt}{\\sqrt{1-t^{2}}}=\\arcsin t+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\arcsin(x/2)+C$.",
                  calculation: "\\arcsin\\frac{x}{2}+C",
                },
              ],
            },
            {
              id: "1.37",
              title: "Arksinus për $\\sqrt{3-x^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\\\sqrt{3-x^{2}}}$.",
              goal: "I njëjti model me $a=\\sqrt{3}$.",
              steps: [
                {
                  id: "s1",
                  title: "Shkruani a scaled form",
                  why: "$\\sqrt{3-x^{2}}=\\sqrt{3}\\sqrt{1-x^{2}/3}$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $t=x/\\sqrt{3}$",
                  why: "Reduktoni to $\\int\\frac{dt}{\\sqrt{1-t^{2}}}$.",
                  calculation: "\\arcsin\\frac{x}{\\sqrt{3}}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{\\sqrt{3-x^{2}}}=\\arcsin\\frac{x}{\\sqrt{3}}+C$.",
                },
              ],
            },
            {
              id: "1.38",
              title: "Formë logaritmike për $\\sqrt{x^{2}+25}$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{x^{2}+25}}$.",
              goal: "Përdorni formulën standarde logaritmike / hiperbolike.",
              steps: [
                {
                  id: "s1",
                  title: "Njohni the table form",
                  why: "$\\int\\frac{dx}{\\sqrt{x^{2}+a^{2}}}=\\ln\\bigl|x+\\sqrt{x^{2}+a^{2}}\\bigr|+C$ with $a=5$.",
                  formula: "\\int\\frac{dx}{\\sqrt{x^{2}+a^{2}}}=\\ln\\bigl|x+\\sqrt{x^{2}+a^{2}}\\bigr|+C",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $a=5$",
                  why: "$\\ln\\bigl|x+\\sqrt{x^{2}+25}\\bigr|+C$.",
                  calculation: "\\ln\\bigl|x+\\sqrt{x^{2}+25}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{\\sqrt{x^{2}+25}}=\\ln\\bigl|x+\\sqrt{x^{2}+25}\\bigr|+C$.",
                },
              ],
            },
            {
              id: "1.39",
              title: "Formë logaritmike për $\\sqrt{x^{2}-3}$",
              prompt: "Llogaritni $\\displaystyle \\int \\\\frac{dx}{\\\\sqrt{x^{2}-3}}$.",
              goal: "Përdorni formulën e tabelës për $\\sqrt{x^{2}-a^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Identifikoni $a=\\sqrt{3}$",
                  why: "$\\int\\frac{dx}{\\sqrt{x^{2}-a^{2}}}=\\ln\\bigl|x+\\sqrt{x^{2}-a^{2}}\\bigr|+C$.",
                },
                {
                  id: "s2",
                  title: "Shkruani the answer",
                  why: "$\\ln\\bigl|x+\\sqrt{x^{2}-3}\\bigr|+C$.",
                  calculation: "\\ln\\bigl|x+\\sqrt{x^{2}-3}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Shënim për domenin",
                  why: "Kjo formulë vlen për $|x|>\\sqrt{3}$.",
                },
              ],
            },
            {
              id: "1.40",
              title: "Familja $\\sqrt{ax^{2}+bx+c}$ (metoda)",
              prompt: "Përshkruani si të llogaritni $\\displaystyle \\\\int \\\\sqrt{ax^{2}+bx+c}\\\\,dx$ (or $\\\\int\\\\frac{dx}{\\\\sqrt{ax^{2}+bx+c}}$) according to the sign of $a$ and $\\\\Delta$.",
              goal: "Plotësoni katrorin dhe reduktoni te një nga tre format e tabelës.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "Zhvendosni $x$ që the radicand becomes $A(t^{2}\\pm k^{2})$ or $A(k^{2}-t^{2})$.",
                },
                {
                  id: "s2",
                  title: "Zgjidhni formulën e tabelës",
                  why: "Përdorni arksinusin për $k^{2}-t^{2}$, and log (or inverse hyperbolic) forms for $t^{2}\\pm k^{2}$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Ktheni zhvendosjen lineare $t=x+b/(2a)$.",
                  notes: "Ushtrimi 1.40 në libër is the general template used by 1.36–1.39 and 1.41–1.42.",
                },
              ],
            },
            {
              id: "1.41",
              title: "Arksinus pas plotësimit të katrorit",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{dx}{\\\\sqrt{-x^{2}+2x+3}}$.",
              goal: "Plotësoni katrorin nën rrënjë, pastaj përdorni arksinusin.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$-x^{2}+2x+3=4-(x-1)^{2}$.",
                  calculation: "-x^{2}+2x+3=4-(x-1)^{2}",
                },
                {
                  id: "s2",
                  title: "Vendosni $u=x-1$",
                  why: "$\\int\\frac{du}{\\sqrt{4-u^{2}}}=\\arcsin(u/2)+C$.",
                  calculation: "\\arcsin\\frac{x-1}{2}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{\\sqrt{-x^{2}+2x+3}}=\\arcsin\\frac{x-1}{2}+C$.",
                },
              ],
            },
            {
              id: "1.42",
              title: "Logaritëm pas plotësimit të katrorit",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{dx}{\\\\sqrt{x^{2}+2x+3}}$.",
              goal: "Plotësoni katrorin te $(x+1)^{2}+2$, pastaj përdorni formulën logaritmike.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$x^{2}+2x+3=(x+1)^{2}+2$.",
                },
                {
                  id: "s2",
                  title: "Vendosni $u=x+1$",
                  why: "$\\int\\frac{du}{\\sqrt{u^{2}+2}}=\\ln\\bigl|u+\\sqrt{u^{2}+2}\\bigr|+C$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\ln\\bigl|x+1+\\sqrt{x^{2}+2x+3}\\bigr|+C$.",
                  calculation: "\\ln\\bigl|x+1+\\sqrt{x^{2}+2x+3}\\bigr|+C",
                },
              ],
            },
            {
              id: "1.43",
              title: "$(px+q)/\\sqrt{ax^{2}+bx+c}$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{px+q}{\\\\sqrt{ax^{2}+bx+c}}\\,dx$ for $a\\\\neq 0$, $p\\\\neq 0$.",
              goal: "Ndani në një pjesë derivat-i-radikandit plus një konstante mbi rrënjë.",
              steps: [
                {
                  id: "s1",
                  title: "Përputhni me derivatin e radikandit",
                  why: "Shkruani $px+q=\\alpha(2ax+b)+\\beta$.",
                },
                {
                  id: "s2",
                  title: "Integrali i parë",
                  why: "$\\alpha\\int\\frac{d(ax^{2}+bx+c)}{\\sqrt{ax^{2}+bx+c}}=2\\alpha\\sqrt{ax^{2}+bx+c}$.",
                },
                {
                  id: "s3",
                  title: "Integrali i dytë",
                  why: "$\\beta\\int\\frac{dx}{\\sqrt{ax^{2}+bx+c}}$ trajtohet duke plotësuar katrorin as in 1.40.",
                  notes: "Ky është shoqëruesi of 1.33 for square-root denominators.",
                },
              ],
            },
            {
              id: "1.44",
              title: "Shembull konkret linear-mbi-rrënjë",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{3x+5}{\\\\sqrt{4x^{2}-2x+5}}\\,dx$.",
              goal: "Ndani duke përdorur derivatin e $4x^{2}-2x+5$, pastaj plotësoni katrorin te mbetja.",
              steps: [
                {
                  id: "s1",
                  title: "Shkruani the numerator via the derivative",
                  why: "$\\frac{d}{dx}(4x^{2}-2x+5)=8x-2$. Zgjidhni $3x+5=\\alpha(8x-2)+\\beta$.",
                },
                {
                  id: "s2",
                  title: "Integroni the matched piece",
                  why: "Prodhon një shumëfish të $\\sqrt{4x^{2}-2x+5}$.",
                },
                {
                  id: "s3",
                  title: "Integroni the constant remainder",
                  why: "Complete the square under the root and finish with a logarithm (or arcsine, depending on sign).",
                  notes: "Ndiqni të njëjtën algjebër as the book’s worked 1.44.",
                },
              ],
            },
            {
              id: "1.45",
              title: "Produkt në shumë për $\\sin ax\\cos bx$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\sin(ax)\\\\cos(bx)\\\\,dx$ for $a\\\\neq\\\\pm b$.",
              goal: "Ktheni produktin në shumë sinusesh, pastaj integroni.",
              steps: [
                {
                  id: "s1",
                  title: "Përdorni identitetin",
                  why: "$\\sin A\\cos B=\\tfrac12\\bigl(\\sin(A+B)+\\sin(A-B)\\bigr)$.",
                  formula: "\\sin A\\cos B=\\tfrac12\\bigl(\\sin(A+B)+\\sin(A-B)\\bigr)",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\tfrac12\\int\\sin((a+b)x)\\,dx+\\tfrac12\\int\\sin((a-b)x)\\,dx$.",
                  calculation: "-\\frac{\\cos((a+b)x)}{2(a+b)}-\\frac{\\cos((a-b)x)}{2(a-b)}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "Vlen sa herë $a\\neq\\pm b$; the resonant cases $a=\\pm b$ are handled separately.",
                },
              ],
            },
            {
              id: "1.46",
              title: "Produkt në shumë për $\\cos ax\\cos bx$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\cos(ax)\\\\cos(bx)\\\\,dx$ for $a\\\\neq\\\\pm b$.",
              goal: "Përdorni identitetin e produktit të kosinuseve.",
              steps: [
                {
                  id: "s1",
                  title: "Përdorni identitetin",
                  why: "$\\cos A\\cos B=\\tfrac12\\bigl(\\cos(A+B)+\\cos(A-B)\\bigr)$.",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\frac{\\sin((a+b)x)}{2(a+b)}+\\frac{\\sin((a-b)x)}{2(a-b)}+C$.",
                  calculation: "\\frac{\\sin((a+b)x)}{2(a+b)}+\\frac{\\sin((a-b)x)}{2(a-b)}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "Përsëri supozoni $a\\neq\\pm b$.",
                },
              ],
            },
            {
              id: "1.47",
              title: "$\\cos 3x\\cos 5x$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\cos 3x\\\\,\\\\cos 5x\\\\,dx$.",
              goal: "Specializoni identitetin e mëparshëm.",
              steps: [
                {
                  id: "s1",
                  title: "Produkt në shumë",
                  why: "$\\cos 3x\\cos 5x=\\tfrac12(\\cos 8x+\\cos 2x)$.",
                  calculation: "\\cos 3x\\cos 5x=\\tfrac12(\\cos 8x+\\cos 2x)",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\tfrac{1}{16}\\sin 8x+\\tfrac{1}{4}\\sin 2x+C$.",
                  calculation: "\\frac{\\sin 8x}{16}+\\frac{\\sin 2x}{4}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\cos 3x\\cos 5x\\,dx=\\frac{\\sin 8x}{16}+\\frac{\\sin 2x}{4}+C$.",
                },
              ],
            },
            {
              id: "1.48",
              title: "$\\sin 2x\\cos 3x$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\sin 2x\\\\,\\\\cos 3x\\\\,dx$.",
              goal: "Përdorni $\\sin A\\cos B=\\tfrac12(\\sin(A+B)+\\sin(A-B))$.",
              steps: [
                {
                  id: "s1",
                  title: "Ktheni në një shumë",
                  why: "$\\sin 2x\\cos 3x=\\tfrac12(\\sin 5x+\\sin(-x))=\\tfrac12(\\sin 5x-\\sin x)$.",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$-\\frac{\\cos 5x}{10}+\\frac{\\cos x}{2}+C$.",
                  calculation: "-\\frac{\\cos 5x}{10}+\\frac{\\cos x}{2}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\sin 2x\\cos 3x\\,dx=-\\frac{\\cos 5x}{10}+\\frac{\\cos x}{2}+C$.",
                },
              ],
            },
            {
              id: "1.49",
              title: "$\\sin 4x\\sin 7x$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\sin 4x\\\\,\\\\sin 7x\\\\,dx$.",
              goal: "Përdorni identitetin e produktit të sinusëve.",
              steps: [
                {
                  id: "s1",
                  title: "Identiteti",
                  why: "$\\sin A\\sin B=\\tfrac12\\bigl(\\cos(A-B)-\\cos(A+B)\\bigr)$.",
                  calculation: "\\sin 4x\\sin 7x=\\tfrac12(\\cos 3x-\\cos 11x)",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\frac{\\sin 3x}{6}-\\frac{\\sin 11x}{22}+C$.",
                  calculation: "\\frac{\\sin 3x}{6}-\\frac{\\sin 11x}{22}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\sin 4x\\sin 7x\\,dx=\\frac{\\sin 3x}{6}-\\frac{\\sin 11x}{22}+C$.",
                },
              ],
            },
            {
              id: "1.50",
              title: "$\\sin^{2}(3x)$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\sin^{2}(3x)\\\\,dx$.",
              goal: "Përdorni identitetin e uljes së fuqisë.",
              steps: [
                {
                  id: "s1",
                  title: "Ulni fuqinë",
                  why: "$\\sin^{2}\\theta=\\frac{1-\\cos 2\\theta}{2}$ with $\\theta=3x$.",
                  calculation: "\\sin^{2}(3x)=\\frac{1-\\cos 6x}{2}",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\frac{x}{2}-\\frac{\\sin 6x}{12}+C$.",
                  calculation: "\\frac{x}{2}-\\frac{\\sin 6x}{12}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\sin^{2}(3x)\\,dx=\\frac{x}{2}-\\frac{\\sin 6x}{12}+C$.",
                },
              ],
            },
            {
              id: "1.51",
              title: "$\\cos^{2}(4x)$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\cos^{2}(4x)\\\\,dx$.",
              goal: "Përdorni $\\cos^{2}\\theta=\\frac{1+\\cos 2\\theta}{2}$.",
              steps: [
                {
                  id: "s1",
                  title: "Ulni fuqinë",
                  why: "$\\cos^{2}(4x)=\\frac{1+\\cos 8x}{2}$.",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\frac{x}{2}+\\frac{\\sin 8x}{16}+C$.",
                  calculation: "\\frac{x}{2}+\\frac{\\sin 8x}{16}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\cos^{2}(4x)\\,dx=\\frac{x}{2}+\\frac{\\sin 8x}{16}+C$.",
                },
              ],
            },
            {
              id: "1.52",
              title: "Integrali i $a^{\\ln x}$ / lidhur me logaritmin",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{a^{\\\\ln x}}{x}\\\\,dx$ for $a>0$, $a\\\\neq 1$ (equivalently treat $\\\\int a^{\\\\ln x}\\\\frac{dx}{x}$).",
              goal: "Zëvendësoni $t=\\ln x$.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni $t=\\ln x$",
                  why: "Atëherë $dt=dx/x$.",
                  calculation: "\\int a^{t}\\,dt",
                },
                {
                  id: "s2",
                  title: "Integroni the exponential",
                  why: "$\\frac{a^{t}}{\\ln a}+C$ kur $a\\neq 1$.",
                  calculation: "\\frac{a^{\\ln x}}{\\ln a}+C",
                },
                {
                  id: "s3",
                  title: "Rasti i veçantë $a=1$",
                  why: "Nëse $a=1$ integranda është $1/x$ and the answer is $\\ln|x|+C$.",
                  notes: "Libri i regjistron të dy the $a\\neq 1$ and $a=1$ cases.",
                },
              ],
            },
            {
              id: "1.53",
              title: "Zëvendësim për modelin $x^{2}/(1+x^{4})$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{x^{2}+1}{x^{4}+1}\\\\,dx$ (equivalently the book’s split of related $x^{4}\\\\pm 1$ forms).",
              goal: "Pjesëtoni me $x^{2}$ / përdorni zëvendësime të tipit $t=x-1/x$.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni numëruesin dhe emëruesin me $x^{2}$",
                  why: "Përgatitni një zëvendësim $t=x-\\frac{1}{x}$ or $t=x+\\frac{1}{x}$.",
                  calculation: "\\int\\frac{1+\\frac{1}{x^{2}}}{x^{2}+\\frac{1}{x^{2}}}\\,dx",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=x-1/x$",
                  why: "Atëherë $dt=(1+1/x^{2})\\,dx$ and $x^{2}+1/x^{2}=t^{2}+2$.",
                },
                {
                  id: "s3",
                  title: "Përfundoni me arktangent",
                  why: "$\\int\\frac{dt}{t^{2}+2}=\\frac{1}{\\sqrt{2}}\\arctan\\frac{t}{\\sqrt{2}}+C$, then return to $x$.",
                  notes: "Ky është zbërthimi standard “$t=x\\pm 1/x$” trick featured in 1.53–1.55.",
                },
              ],
            },
            {
              id: "1.54",
              title: "Shoqëruesi $t=x+1/x$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{x^{2}-1}{x^{4}+1}\\\\,dx$ using $t=x+\\\\frac{1}{x}$.",
              goal: "Pasqyroni metodën e mëparshme me zëvendësimin plus.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni me $x^{2}$",
                  why: "$\\int\\frac{1-1/x^{2}}{x^{2}+1/x^{2}}\\,dx$.",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=x+1/x$",
                  why: "Atëherë $dt=(1-1/x^{2})\\,dx$ and $x^{2}+1/x^{2}=t^{2}-2$.",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "$\\int\\frac{dt}{t^{2}-2}$ është logaritmike; kthehuni te $x$.",
                  calculation: "\\frac{1}{2\\sqrt{2}}\\ln\\Bigl|\\frac{t-\\sqrt{2}}{t+\\sqrt{2}}\\Bigr|+C",
                },
              ],
            },
            {
              id: "1.55",
              title: "Reduktim më i vështirë $x\\pm 1/x$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\frac{x^{2}+1}{x^{4}+x^{3}-x+1}\\\\,dx$ (book denominator of similar shape).",
              goal: "Faktorizoni ose rishkruani për të mundësuar $t=x-1/x$, pastaj përfundoni me arktangent.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni me $x^{2}$ and rearrange",
                  why: "Synoni një shprehje në $x-1/x$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $t=x-1/x$",
                  why: "Integrali bëhet rational in $t$.",
                },
                {
                  id: "s3",
                  title: "Plotësoni dhe integroni",
                  why: "Reduktoni to an arctangent (as in the book’s final $\\arctan$ expression).",
                  notes: "Ndiqni algjebrën në PDF solution for the precise coefficients.",
                },
              ],
            },
            {
              id: "1.56",
              title: "Zëvendësim trigonometrik për $\\sqrt{b^{2}-a^{2}x^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\\\int \\\\sqrt{b^{2}-a^{2}x^{2}}\\\\,dx$ for $a,b>0$.",
              goal: "Përdorni $ax=b\\sin u$ (ose $t=ax/b$ pastaj $t=\\sin u$).",
              steps: [
                {
                  id: "s1",
                  title: "Rishkallëzoni",
                  why: "Shkruani $\\sqrt{b^{2}-a^{2}x^{2}}=b\\sqrt{1-(ax/b)^{2}}$ and set $t=ax/b$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësim trigonometrik",
                  why: "Lejoni $t=\\sin u$, so $\\sqrt{1-t^{2}}=\\cos u$ and $dt=\\cos u\\,du$.",
                  calculation: "\\int\\sqrt{1-t^{2}}\\,dt=\\int\\cos^{2}u\\,du",
                },
                {
                  id: "s3",
                  title: "Integroni $\\cos^{2}u$",
                  why: "Përdorni $\\cos^{2}u=\\frac{1+\\cos 2u}{2}$, then return to $t$ and $x$.",
                  formula: "\\int\\sqrt{b^{2}-a^{2}x^{2}}\\,dx=\\frac{x}{2}\\sqrt{b^{2}-a^{2}x^{2}}+\\frac{b^{2}}{2a}\\arcsin\\frac{ax}{b}+C",
                  notes: "Kjo përputhet me përzierjen përfundimtare të librit of algebraic and arcsine terms.",
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
      title: 'Metoda e Integrimit me Pjesë',
      description:
        'Ktheni rregullën e produktit: zgjidhni $u$ dhe $dv$, pastaj përdorni $\\int u\\,dv = uv - \\int v\\,du$.',
      exercises: '1.57–1.68',
      sections: [
        {
          id: 'parts-core',
          title: 'Modele klasike me pjesë',
          summary:
            'Polinom × log, eksponenciale ose trig — derivoni faktorin që thjeshtohet.',
          examples: [
            {
              id: '1.57',
              title: 'Integrimi i $x\\ln x$',
              prompt: 'Llogaritni $\\displaystyle \\int x\\ln x\\,dx$.',
              goal: 'Lejoni $u=\\ln x$ që derivimi të heqë logaritmin.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni pjesët',
                  why: 'Logaritmet thjeshtohen kur derivohen; fuqitë integrohen lehtë.',
                  calculation: 'u=\\ln x,\\quad dv=x\\,dx \\implies du=\\frac{1}{x}\\,dx,\\quad v=\\frac{x^{2}}{2}',
                },
                {
                  id: 's2',
                  title: 'Përdorni formulën',
                  why: 'Zëvendësoni në $uv-\\int v\\,du$.',
                  calculation:
                    '\\frac{x^{2}}{2}\\ln x - \\int\\frac{x^{2}}{2}\\cdot\\frac{1}{x}\\,dx = \\frac{x^{2}}{2}\\ln x - \\tfrac12\\int x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Përfundoni',
                  why: 'Integrali i mbetur është elementar.',
                  calculation: '\\frac{x^{2}}{2}\\ln x - \\frac{x^{2}}{4}+C = \\frac{x^{2}}{4}(2\\ln x-1)+C',
                },
              ],
            },
            {
              id: '1.58',
              title: 'Integrimi i $x e^{x}$',
              prompt: 'Llogaritni $\\displaystyle \\int x e^{x}\\,dx$.',
              goal: 'Derivoni faktorin polinomial dhe integroni eksponencialen.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni $u=x$, $dv=e^{x}\\,dx$',
                  why: 'Atëherë $du=dx$ dhe $v=e^{x}$.',
                  calculation: 'u=x,\\quad dv=e^{x}\\,dx \\implies du=dx,\\quad v=e^{x}',
                },
                {
                  id: 's2',
                  title: 'Përdorni pjesët',
                  why: 'Integrali i ri $\\int e^{x}\\,dx$ është i menjëhershëm.',
                  calculation: 'x e^{x} - \\int e^{x}\\,dx = x e^{x} - e^{x}+C = e^{x}(x-1)+C',
                },
              ],
            },
            {
              id: '1.60',
              title: 'Integrimi i $x\\sin x$',
              prompt: 'Llogaritni $\\displaystyle \\int x\\sin x\\,dx$.',
              goal: 'Ushtroni pjesët me një faktor trigonometrik si $dv$.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni pjesët',
                  why: 'Derivoni $x$; integroni $\\sin x$.',
                  calculation: 'u=x,\\quad dv=\\sin x\\,dx \\implies du=dx,\\quad v=-\\cos x',
                },
                {
                  id: 's2',
                  title: 'Përfundoni integralin e kosinusit',
                  why: 'Pas pjesëve mbetet $\\int\\cos x\\,dx=\\sin x$.',
                  calculation: '-x\\cos x + \\int\\cos x\\,dx = -x\\cos x + \\sin x + C',
                },
              ],
            },
{
              id: '1.61',
              title: 'Pjesë dy herë për $x^{2}\\cos x$',
              prompt: 'Llogaritni $\\displaystyle \\int x^{2}\\cos x\\,dx$.',
              goal: 'Ulni shkallën e polinomit me dy aplikime të pjesëve.',
              steps: [
                {
                  id: 's1',
                  title: 'Hapi i parë me pjesë',
                  why: 'Lejoni $u=x^{2}$ që shkalla të ulet; integroni kosinusin.',
                  calculation:
                    'u=x^{2},\\quad dv=\\cos x\\,dx \\implies \\int x^{2}\\cos x\\,dx = x^{2}\\sin x - 2\\int x\\sin x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Ripërdorni $\\int x\\sin x\\,dx$',
                  why: 'Nga kapitulli i mëparshëm, $\\int x\\sin x\\,dx=-x\\cos x+\\sin x$.',
                  calculation:
                    'x^{2}\\sin x - 2(-x\\cos x+\\sin x)+C = x^{2}\\sin x + 2x\\cos x - 2\\sin x + C',
                },
              ],
            },
{
              id: '1.63',
              title: 'Eksponenciale × sinus',
              prompt: 'Llogaritni $\\displaystyle \\int e^{x}\\sin x\\,dx$.',
              goal: 'Përdorni pjesët dy herë dhe zgjidhni për integralin fillestar.',
              steps: [
                {
                  id: 's1',
                  title: 'Pjesë një herë',
                  why: 'Merrni $u=e^{x}$ dhe $dv=\\sin x\\,dx$.',
                  calculation: '\\int e^{x}\\sin x\\,dx = -e^{x}\\cos x + \\int e^{x}\\cos x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Pjesë përsëri mbi integralin e kosinusit',
                  why: 'Një hap i dytë prodhon integralin fillestar me shenjë minus.',
                  calculation:
                    '\\int e^{x}\\cos x\\,dx = e^{x}\\sin x - \\int e^{x}\\sin x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Zgjidhni për $I$',
                  why: 'Mblidhni integralin e panjohur në një anë dhe pjesëtoni me $2$.',
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
      title: 'Zbatime të Integrimit me Pjesë',
      description:
        'Pjesë të përsëritura, ide redukimi dhe integrale që përziejnë radikalet me polinomet.',
      exercises: '1.69–1.81',
      sections: [
        {
          id: 'parts-advanced',
          title: 'Pjesë të përsëritura dhe forma të përziera',
          summary:
            'Kur një hap me pjesë nuk mjafton, përsëritni metodën ose rirregulloni ekuacionin.',
          examples: [
          ],
        },
      ],
    },
    {
      id: 'rational-functions',
      number: 6,
      title: 'Integrimi i Funksioneve Racionale',
      description:
        'Thyesa të pjesshme: zbërtheni $\\frac{P(x)}{Q(x)}$ në pjesë më të thjeshta që integrohen me tabelën.',
      exercises: '1.82–1.97',
      sections: [
        {
          id: 'partial-fractions',
          title: 'Zbërthimi në thyesa të pjesshme',
          summary:
            'Faktorizoni emëruesin, shkruani koeficientët e panjohur, pastaj integroni term pas termi.',
          examples: [
            {
              id: 'ex-1-82',
              title: 'Faktorë linearë të ndryshëm',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{dx}{x(x+5)}$.',
              goal: 'Zbërtheni në thyesa të pjesshme dhe integroni logaritmet.',
              steps: [
                {
                  id: 's1',
                  title: 'Vendosni thyesat e pjesshme',
                  why: 'Emëruesi faktorizohet si $x(x+5)$ me rrënjë lineare të ndryshme.',
                  calculation: '\\frac{1}{x(x+5)} = \\frac{A}{x}+\\frac{B}{x+5}',
                },
                {
                  id: 's2',
                  title: 'Gjeni $A$ dhe $B$',
                  why: 'Pastrojeni emëruesin: $1=A(x+5)+Bx$. Krahasimi i koeficientëve jep $A=\\tfrac15$, $B=-\\tfrac15$.',
                  calculation: '\\frac{1}{x(x+5)} = \\frac{1}{5}\\Bigl(\\frac{1}{x}-\\frac{1}{x+5}\\Bigr)',
                },
                {
                  id: 's3',
                  title: 'Integroni',
                  why: 'Çdo term është logaritëm.',
                  calculation:
                    '\\tfrac15\\ln|x| - \\tfrac15\\ln|x+5|+C = \\tfrac15\\ln\\Bigl|\\frac{x}{x+5}\\Bigr|+C',
                },
              ],
            },
            {
              id: 'ex-1-83',
              title: 'Së pari pjesëtimi i polinomeve',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{x^{3}}{x^{2}+1}\\,dx$.',
              goal: 'Kur shkallët nuk janë të duhura, pjesëtoni para se të integroni.',
              steps: [
                {
                  id: 's1',
                  title: 'Pjesëtoni',
                  why: 'Shkalla e numëruesit e tejkalon atë të emëruesit, prandaj shkruani një polinom plus një mbetje të duhur.',
                  calculation: '\\frac{x^{3}}{x^{2}+1} = x - \\frac{x}{x^{2}+1}',
                },
                {
                  id: 's2',
                  title: 'Integroni çdo pjesë',
                  why: 'Termi i parë është elementar; i dyti përputhet me $\\tfrac12\\ln(x^{2}+1)$ pas $u=x^{2}+1$.',
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
      title: 'Integrimi i Funksioneve Irracionale',
      description:
        'Zëvendësime që racionalizojnë rrënjët dhe i kthejnë ato në integrande racionale.',
      exercises: '1.98–1.106',
      sections: [
        {
          id: 'roots',
          title: 'Zëvendësime me rrënjë',
          summary:
            'Zgjidhni një fuqi të një shprehjeje lineare që pastron të gjitha rrënjët njëherësh.',
          examples: [
            {
              id: 'ex-1-98',
              title: 'Pastrimi i $\\sqrt{x}$ dhe $\\sqrt[3]{x}$',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{dx}{\\sqrt{x}+\\sqrt[3]{x}}$.',
              goal: 'Përdorni $t=x^{1/6}$ që të dyja rrënjët të bëhen fuqi të plota të $t$.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni QMP-në e indekseve të rrënjëve',
                  why: 'Indekset $2$ dhe $3$ kanë QMP $6$, prandaj vendosni $x=t^{6}$.',
                  calculation: 'x=t^{6},\\quad dx=6t^{5}\\,dt,\\quad \\sqrt{x}=t^{3},\\quad \\sqrt[3]{x}=t^{2}',
                },
                {
                  id: 's2',
                  title: 'Zëvendësoni',
                  why: 'Integranda bëhet racionale në $t$.',
                  calculation:
                    '\\int\\frac{6t^{5}}{t^{3}+t^{2}}\\,dt = 6\\int\\frac{t^{3}}{t+1}\\,dt',
                },
                {
                  id: 's3',
                  title: 'Pjesëtoni dhe integroni',
                  why: 'Pjesëtimi i polinomeve jep terma që integrohen me tabelën; pastaj kthehuni te $x$.',
                  calculation:
                    '6\\int\\bigl(t^{2}-t+1-\\tfrac{1}{t+1}\\bigr)\\,dt = 2t^{3}-3t^{2}+6t-6\\ln|t+1|+C',
                  notes:
                    'Në fund zëvendësoni $t=x^{1/6}$ për ta shprehur përgjigjen në $x$.',
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
      title: 'Integralet Trigonometrike',
      description:
        'Fuqi dhe produkte të sinusit dhe kosinusit, përfshirë $t=\\tan(x/2)$ kur nevojitet.',
      exercises: '1.107–1.112',
      sections: [
        {
          id: 'trig-powers',
          title: 'Fuqitë e sinusit dhe kosinusit',
          summary:
            'Përdorni identitete ose një zëvendësim $t$ për t’i kthyer integralet trigonometrike në racionale.',
          examples: [
            {
              id: 'ex-1-111',
              title: 'Fuqi tek e sinusit',
              prompt: 'Llogaritni $\\displaystyle \\int \\sin^{3}x\\,dx$.',
              goal: 'Ruani një sinus për $du$ dhe konvertoni pjesën tjetër me $\\sin^{2}=1-\\cos^{2}$.',
              steps: [
                {
                  id: 's1',
                  title: 'Faktorizoni një sinus',
                  why: 'Shkruani $\\sin^{3}x=\\sin^{2}x\\cdot\\sin x=(1-\\cos^{2}x)\\sin x$.',
                  calculation: '\\int\\sin^{3}x\\,dx = \\int(1-\\cos^{2}x)\\sin x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Zëvendësoni $u=\\cos x$',
                  why: 'Atëherë $du=-\\sin x\\,dx$.',
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
      title: 'Zbatime të Integraleve Trigonometrike',
      description:
        'Funksione racionale të sinusit dhe kosinusit përmes $t=\\tan(x/2)$ ose shkurtimesh simetrie.',
      exercises: '1.113–1.120',
      sections: [
        {
          id: 'weierstrass',
          title: 'Weierstrass dhe truket e simetrisë',
          summary:
            'Kur $R(\\sin x,\\cos x)$ është racionale, zëvendësimi me gjysmë-kënd e racionalizon integralin.',
          examples: [
            {
              id: 'ex-1-113',
              title: 'Zëvendësimi me gjysmë-kënd',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{dx}{\\sin x+\\cos x+3}$.',
              goal: 'Përdorni $t=\\tan(x/2)$ për ta kthyer në një integral racional në $t$.',
              steps: [
                {
                  id: 's1',
                  title: 'Kujtoni formulat e Weierstrass',
                  why: 'Çdo funksion trigonometrik bëhet një shprehje racionale në $t=\\tan(x/2)$.',
                  formula:
                    't=\\tan\\tfrac{x}{2},\\quad \\sin x=\\frac{2t}{1+t^{2}},\\quad \\cos x=\\frac{1-t^{2}}{1+t^{2}},\\quad dx=\\frac{2\\,dt}{1+t^{2}}',
                },
                {
                  id: 's2',
                  title: 'Zëvendësoni',
                  why: 'Emëruesi dhe diferenciali bashkohen në një kuadratike në $t$.',
                  calculation:
                    '\\int\\frac{2\\,dt/(1+t^{2})}{\\frac{2t}{1+t^{2}}+\\frac{1-t^{2}}{1+t^{2}}+3} = \\int\\frac{2\\,dt}{-t^{2}+2t+4}',
                },
                {
                  id: 's3',
                  title: 'Plotësoni dhe integroni',
                  why: 'Plotësoni katrorin (ose zhvendosni) për të arritur një arktangjent.',
                  calculation:
                    '\\int\\frac{2\\,dt}{5-(t-1)^{2}} \\rightarrow \\text{arktangent në }t=\\tan(x/2)',
                  notes:
                    'Përgjigja përfundimtare mund të shkruhet si $\\arctan\\bigl(\\tan(x/2)-1\\bigr)$ me një faktor konstant nga plotësimi i katrorit.',
                },
              ],
            },
            {
              id: 'ex-1-114',
              title: 'Shkurtim simetrie $t=\\tan x$',
              prompt:
                'Llogaritni $\\displaystyle \\int \\frac{\\sin x-\\cos x}{\\sin x+\\cos x}\\,dx$.',
              goal: 'Përdorni simetrinë tek/çift në $\\sin$ dhe $\\cos$ për të justifikuar $t=\\tan x$.',
              steps: [
                {
                  id: 's1',
                  title: 'Pjesëtoni me $\\cos x$',
                  why: 'Shkrimi i gjithçkaje në $\\tan x$ përgatit një zëvendësim të drejtpërdrejtë.',
                  calculation:
                    '\\frac{\\sin x-\\cos x}{\\sin x+\\cos x} = \\frac{\\tan x-1}{\\tan x+1}',
                },
                {
                  id: 's2',
                  title: 'Vendosni $t=\\tan x$',
                  why: 'Atëherë $dt=\\sec^{2}x\\,dx=(1+t^{2})\\,dx$, dhe integrali thjeshtohet.',
                  calculation:
                    '\\int\\frac{t-1}{(t+1)(1+t^{2})}\\cdot(1+t^{2})\\,dt = \\int\\frac{t-1}{t+1}\\,dt',
                },
                {
                  id: 's3',
                  title: 'Përfundoni',
                  why: 'Rishkruani dhe integroni: përgjigje logaritmike në $\\tan x$.',
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
