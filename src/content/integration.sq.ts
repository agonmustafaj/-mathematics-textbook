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
      exercises: "1.4–1.15",
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
            {
              id: "1.15",
              title: "Gjeni $f$ nga $f'$ përmes një pike",
              prompt: "Gjeni funksionin $f$ që kalon nëpër $M(1,0)$ dhe plotëson $f'(x)=3x^{2}-1$.",
              goal: "Integroni $f'$, pastaj përdorni pikën për të fiksuar $+C$.",
              steps: [
                {
                  id: "s1",
                  title: "Integroni derivatin",
                  why: "Çdo antiderivatë e $f'$ është kandidat për $f$.",
                  calculation: "\\int(3x^{2}-1)\\,dx=x^{3}-x+C",
                },
                {
                  id: "s2",
                  title: "Zbatoni $f(1)=0$",
                  why: "Zëvendësoni pikën e dhënë për të zgjidhur për $C$.",
                  calculation: "f(1)=1-1+C=0\\implies C=0",
                },
                {
                  id: "s3",
                  title: "Shkruani funksionin",
                  why: "Me $C=0$ zgjidhja unike që kalon nëpër $M$ është $f(x)=x^{3}-x$.",
                  calculation: "f(x)=x^{3}-x",
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
      id: "integration-by-parts",
      number: 4,
      title: "Metoda e Integrimit me Pjesë",
      description: "Anuloni rregullën e produktit: zgjidhni $u$ dhe $dv$, pastaj zbatoni $\\int u\\,dv = uv - \\int v\\,du$.",
      exercises: "1.57–1.68",
      sections: [
        {
          id: "parts-core",
          title: "Modele klasike të pjesëve",
          summary: "Polinom × log, eksponenciale, ose trig — derivoni faktorin që thjeshtohet.",
          examples: [
            {
              id: "1.57",
              title: "Integrimi i $x\\ln x$",
              prompt: "Llogaritni $\\displaystyle \\int x\\ln x\\,dx$.",
              goal: "Vendosni $u=\\ln x$ që derivimi të heqë logaritmin.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni pjesët",
                  why: "Logaritmet thjeshtohen me derivim; fuqitë integrohen lehtë.",
                  calculation: "u=\\ln x,\\quad dv=x\\,dx \\implies du=\\frac{1}{x}\\,dx,\\quad v=\\frac{x^{2}}{2}",
                },
                {
                  id: "s2",
                  title: "Zbatoni formulën",
                  why: "Zëvendësoni në $uv-\\int v\\,du$.",
                  formula: "\\int u\\,dv = uv - \\int v\\,du",
                  calculation: "\\frac{x^{2}}{2}\\ln x - \\tfrac12\\int x\\,dx",
                },
                {
                  id: "s3",
                  title: "Përfundoni",
                  why: "Kombinojeni në $\\frac{x^{2}}{4}(2\\ln x-1)+C$.",
                  calculation: "\\frac{x^{2}}{4}(2\\ln x-1)+C",
                },
              ],
            },
            {
              id: "1.58",
              title: "Integrimi i $x e^{x}$",
              prompt: "Llogaritni $\\displaystyle \\int x e^{x}\\,dx$.",
              goal: "Derivoni polinomin; integroni eksponencialen.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni $u=x$, $dv=e^{x}\\,dx$",
                  why: "Atëherë $du=dx$ dhe $v=e^{x}$.",
                  calculation: "u=x,\\quad dv=e^{x}\\,dx \\implies du=dx,\\quad v=e^{x}",
                },
                {
                  id: "s2",
                  title: "Zbatoni pjesët",
                  why: "$xe^{x}-\\int e^{x}\\,dx=e^{x}(x-1)+C$.",
                  calculation: "e^{x}(x-1)+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int x e^{x}\\,dx=e^{x}(x-1)+C$.",
                },
              ],
            },
            {
              id: "1.59",
              title: "Integrimi i $x\\arctan x$",
              prompt: "Llogaritni $\\displaystyle \\int x\\arctan x\\,dx$.",
              goal: "Vendosni $u=\\arctan x$ dhe $dv=x\\,dx$.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni pjesët",
                  why: "$u=\\arctan x$, $dv=x\\,dx$ jep $du=\\frac{1}{1+x^{2}}\\,dx$, $v=\\frac{x^{2}}{2}$.",
                  calculation: "u=\\arctan x,\\quad dv=x\\,dx",
                },
                {
                  id: "s2",
                  title: "Zbatoni formulën",
                  why: "$\\frac{x^{2}}{2}\\arctan x-\\tfrac12\\int\\frac{x^{2}}{1+x^{2}}\\,dx$.",
                },
                {
                  id: "s3",
                  title: "Rishkruani dhe përfundoni",
                  why: "$\\frac{x^{2}}{1+x^{2}}=1-\\frac{1}{1+x^{2}}$, pra mbetet $x-\\arctan x$.",
                  calculation: "\\frac{x^{2}+1}{2}\\arctan x-\\frac{x}{2}+C",
                },
              ],
            },
            {
              id: "1.60",
              title: "Integrimi i $x\\sin x$",
              prompt: "Llogaritni $\\displaystyle \\int x\\sin x\\,dx$.",
              goal: "Derivoni $x$; integroni $\\sin x$.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni pjesët",
                  why: "$u=x$, $dv=\\sin x\\,dx\\Rightarrow du=dx$, $v=-\\cos x$.",
                  calculation: "u=x,\\quad dv=\\sin x\\,dx \\implies v=-\\cos x",
                },
                {
                  id: "s2",
                  title: "Zbatoni pjesët",
                  why: "$-x\\cos x+\\int\\cos x\\,dx$.",
                  calculation: "-x\\cos x+\\sin x+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int x\\sin x\\,dx=-x\\cos x+\\sin x+C$.",
                },
              ],
            },
            {
              id: "1.61",
              title: "Pjesë dy herë për $x^{2}\\cos x$",
              prompt: "Llogaritni $\\displaystyle \\int x^{2}\\cos x\\,dx$.",
              goal: "Ulni shkallën e polinomit me dy zbatime të pjesëve.",
              steps: [
                {
                  id: "s1",
                  title: "Hapi i parë i pjesëve",
                  why: "$u=x^{2}$, $dv=\\cos x\\,dx$ jep $x^{2}\\sin x-2\\int x\\sin x\\,dx$.",
                  calculation: "x^{2}\\sin x-2\\int x\\sin x\\,dx",
                },
                {
                  id: "s2",
                  title: "Ripërdorni $\\int x\\sin x\\,dx$",
                  why: "Nga 1.60: $-x\\cos x+\\sin x$.",
                  calculation: "x^{2}\\sin x+2x\\cos x-2\\sin x+C",
                },
                {
                  id: "s3",
                  title: "Thjeshtoni",
                  why: "$(x^{2}-2)\\sin x+2x\\cos x+C$.",
                  calculation: "(x^{2}-2)\\sin x+2x\\cos x+C",
                },
              ],
            },
            {
              id: "1.62",
              title: "Integrimi i $x\\sin 3x$",
              prompt: "Llogaritni $\\displaystyle \\int x\\sin 3x\\,dx$.",
              goal: "I njëjti model me sinus të shkallëzuar.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni pjesët",
                  why: "$u=x$, $dv=\\sin 3x\\,dx\\Rightarrow v=-\\frac13\\cos 3x$.",
                  calculation: "u=x,\\quad dv=\\sin 3x\\,dx \\implies v=-\\tfrac13\\cos 3x",
                },
                {
                  id: "s2",
                  title: "Zbatoni pjesët",
                  why: "$-\\frac{x}{3}\\cos 3x+\\frac13\\int\\cos 3x\\,dx$.",
                  calculation: "-\\frac{x}{3}\\cos 3x+\\frac{1}{9}\\sin 3x+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int x\\sin 3x\\,dx=-\\frac{x}{3}\\cos 3x+\\frac{1}{9}\\sin 3x+C$.",
                },
              ],
            },
            {
              id: "1.63",
              title: "Eksponenciale × sinus",
              prompt: "Llogaritni $\\displaystyle \\int e^{x}\\sin x\\,dx$.",
              goal: "Zbatoni pjesët dy herë dhe zgjidhni për integralin fillestar.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesë një herë",
                  why: "$u=e^{x}$, $dv=\\sin x\\,dx$ jep $-e^{x}\\cos x+\\int e^{x}\\cos x\\,dx$.",
                },
                {
                  id: "s2",
                  title: "Pjesë përsëri",
                  why: "$\\int e^{x}\\cos x\\,dx=e^{x}\\sin x-\\int e^{x}\\sin x\\,dx$.",
                },
                {
                  id: "s3",
                  title: "Zgjidhni për $I$",
                  why: "$I=-e^{x}\\cos x+e^{x}\\sin x-I\\Rightarrow I=\\tfrac12 e^{x}(\\sin x-\\cos x)+C$.",
                  calculation: "\\tfrac12 e^{x}(\\sin x-\\cos x)+C",
                },
              ],
            },
            {
              id: "1.64",
              title: "Polinom herë $e^{5x}$",
              prompt: "Llogaritni $\\displaystyle \\int (2x^{2}+3x+5)e^{5x}\\,dx$.",
              goal: "Ndajeni në tre integrale dhe përdorni pjesët për çdo fuqi të $x$.",
              steps: [
                {
                  id: "s1",
                  title: "Ndani me linearitet",
                  why: "$2\\int x^{2}e^{5x}\\,dx+3\\int xe^{5x}\\,dx+5\\int e^{5x}\\,dx$.",
                },
                {
                  id: "s2",
                  title: "Integroni secilin me pjesë",
                  why: "Derivoni faktorin polinomial derisa të zhduket; integroni $e^{5x}$ çdo herë.",
                },
                {
                  id: "s3",
                  title: "Kombinoni",
                  why: "Antiderivata është $e^{5x}$ herë një kuadratike.",
                  calculation: "e^{5x}\\Bigl(\\frac{2}{5}x^{2}+\\frac{1}{25}x+\\frac{24}{125}\\Bigr)+C",
                  notes: "Koeficientët dalin nga dy hapa pjesësh për $x^{2}e^{5x}$ dhe një për $xe^{5x}$.",
                },
              ],
            },
            {
              id: "1.65",
              title: "Integrimi i $x\\csc^{2}x$",
              prompt: "Llogaritni $\\displaystyle \\int x\\csc^{2}x\\,dx$.",
              goal: "Vendosni $u=x$ dhe $dv=\\csc^{2}x\\,dx$ që $v=-\\cot x$.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni pjesët",
                  why: "$u=x$, $dv=\\csc^{2}x\\,dx\\Rightarrow du=dx$, $v=-\\cot x$.",
                  calculation: "u=x,\\quad dv=\\csc^{2}x\\,dx \\implies v=-\\cot x",
                },
                {
                  id: "s2",
                  title: "Zbatoni formulën",
                  why: "$-x\\cot x-\\int(-\\cot x)\\,dx=-x\\cot x+\\int\\cot x\\,dx$.",
                },
                {
                  id: "s3",
                  title: "Përfundoni integralin e kotangjentit",
                  why: "$\\int\\cot x\\,dx=\\ln|\\sin x|+C$.",
                  calculation: "-x\\cot x+\\ln|\\sin x|+C",
                },
              ],
            },
            {
              id: "1.66",
              title: "Pjesë për $x^{2}/\\sqrt{1-x^{2}}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}}{\\sqrt{1-x^{2}}}\\,dx$.",
              goal: "Shkruani $x^{2}=1-(1-x^{2})$ dhe/ose përdorni pjesët me zëvendësim trigonometrik.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani numëruesin",
                  why: "$\\frac{x^{2}}{\\sqrt{1-x^{2}}}=\\frac{1-(1-x^{2})}{\\sqrt{1-x^{2}}}=\\frac{1}{\\sqrt{1-x^{2}}}-\\sqrt{1-x^{2}}$.",
                },
                {
                  id: "s2",
                  title: "Integroni secilën pjesë",
                  why: "$\\int\\frac{dx}{\\sqrt{1-x^{2}}}=\\arcsin x$; e dyta kërkon pjesë ose formulën e njohur të sipërfaqes.",
                },
                {
                  id: "s3",
                  title: "Shkruani kombinimin",
                  why: "$-\\frac{x}{2}\\sqrt{1-x^{2}}+\\frac12\\arcsin x+C$ (pas vlerësimit të $\\int\\sqrt{1-x^{2}}\\,dx$).",
                  calculation: "-\\frac{x}{2}\\sqrt{1-x^{2}}+\\frac12\\arcsin x+C",
                },
              ],
            },
            {
              id: "1.67",
              title: "$\\int\\sqrt{b^{2}-a^{2}x^{2}}\\,dx$ me pjesë",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{b^{2}-a^{2}x^{2}}\\,dx$ për $a,b>0$.",
              goal: "Rishkallëzoni, pastaj përdorni pjesët (ose zëvendësim trig) për të marrë përzierjen standarde të termave algjebrikë dhe arcsinus.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkallëzoni",
                  why: "Vendosni $t=ax/b$ që integrali të bëhet një konstante herë $\\int\\sqrt{1-t^{2}}\\,dt$.",
                },
                {
                  id: "s2",
                  title: "Integroni $\\sqrt{1-t^{2}}$",
                  why: "Përdorni pjesë me $u=\\sqrt{1-t^{2}}$, $dv=dt$, ose zëvendësimin $t=\\sin\\theta$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\frac{x}{2}\\sqrt{b^{2}-a^{2}x^{2}}+\\frac{b^{2}}{2a}\\arcsin\\frac{ax}{b}+C$.",
                  calculation: "\\frac{x}{2}\\sqrt{b^{2}-a^{2}x^{2}}+\\frac{b^{2}}{2a}\\arcsin\\frac{ax}{b}+C",
                },
              ],
            },
            {
              id: "1.68",
              title: "Pjesë për $x^{2}/(1+x^{2})$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}}{1+x^{2}}\\,dx$ me pjesë (ose rishkrimin algjebrik).",
              goal: "Ose rishkruani si $1-\\frac{1}{1+x^{2}}$, ose zbatoni pjesët si në libër.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkrim algjebrik (rruga e shpejtë)",
                  why: "$\\frac{x^{2}}{1+x^{2}}=1-\\frac{1}{1+x^{2}}$.",
                  calculation: "1-\\frac{1}{1+x^{2}}",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$x-\\arctan x+C$.",
                  calculation: "x-\\arctan x+C",
                },
                {
                  id: "s3",
                  title: "Rruga e pjesëve në libër",
                  why: "Me $u=x$, $dv=\\frac{x}{1+x^{2}}dx$ merret e njëjta përgjigje pasi një logaritëm shfaqet dhe anulohet në formën e arktangjentit.",
                  notes: "Të dyja rrugët janë të vlefshme; rishkrimi është më i shkurtër për fillestarët.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "parts-applications",
      number: 5,
      title: "Zbatime të Integrimit me Pjesë",
      description: "Pjesë të përsëritura, formula reduktoni dhe integrale që përzien rrënjë me polinome.",
      exercises: "1.69–1.81",
      sections: [
        {
          id: "parts-advanced",
          title: "Rrënjë, reduktime dhe fuqi më të larta",
          summary: "Përdorni pjesët për të hapur integralet me rrënjë katrore dhe formulat e reduktimit për fuqi.",
          examples: [
            {
              id: "1.69",
              title: "$\\int\\sqrt{a^{2}x^{2}\\pm b^{2}}\\,dx$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{a^{2}x^{2}\\pm b^{2}}\\,dx$ për $a,b>0$.",
              goal: "Rishkallëzoni dhe përdorni pjesët / formulën standarde me log.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkallëzoni",
                  why: "Vendosni $t=ax/b$ për të reduktuar në $\\int\\sqrt{t^{2}\\pm 1}\\,dt$.",
                },
                {
                  id: "s2",
                  title: "Integroni $\\sqrt{t^{2}\\pm 1}$",
                  why: "Pjesë me $u=\\sqrt{t^{2}\\pm 1}$ jep një term log plus $\\tfrac12 t\\sqrt{t^{2}\\pm 1}$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\frac{x}{2}\\sqrt{a^{2}x^{2}\\pm b^{2}}\\pm\\frac{b^{2}}{2a}\\ln\\bigl|ax+\\sqrt{a^{2}x^{2}\\pm b^{2}}\\bigr|+C$.",
                },
              ],
            },
            {
              id: "1.70",
              title: "$\\int\\sqrt{4-x^{2}}\\,dx$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{4-x^{2}}\\,dx$.",
              goal: "Përdorni formulën e rrethit / zëvendësimin $x=2\\sin\\theta$.",
              steps: [
                {
                  id: "s1",
                  title: "Njohni formën",
                  why: "Ky është $\\int\\sqrt{a^{2}-x^{2}}\\,dx$ me $a=2$.",
                },
                {
                  id: "s2",
                  title: "Zbatoni antiderivatën standarde",
                  why: "$\\frac{x}{2}\\sqrt{a^{2}-x^{2}}+\\frac{a^{2}}{2}\\arcsin\\frac{x}{a}+C$.",
                },
                {
                  id: "s3",
                  title: "Zëvendësoni $a=2$",
                  why: "$\\frac{x}{2}\\sqrt{4-x^{2}}+2\\arcsin\\frac{x}{2}+C$.",
                  calculation: "\\frac{x}{2}\\sqrt{4-x^{2}}+2\\arcsin\\frac{x}{2}+C",
                },
              ],
            },
            {
              id: "1.71",
              title: "$\\int\\sqrt{3-x^{2}}\\,dx$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{3-x^{2}}\\,dx$.",
              goal: "E njëjta familje me $a=\\sqrt{3}$.",
              steps: [
                {
                  id: "s1",
                  title: "Identifikoni $a=\\sqrt{3}$",
                  why: "Përdorni $\\int\\sqrt{a^{2}-x^{2}}\\,dx=\\frac{x}{2}\\sqrt{a^{2}-x^{2}}+\\frac{a^{2}}{2}\\arcsin\\frac{x}{a}+C$.",
                },
                {
                  id: "s2",
                  title: "Vendosni $a$",
                  why: "$\\frac{x}{2}\\sqrt{3-x^{2}}+\\frac{3}{2}\\arcsin\\frac{x}{\\sqrt{3}}+C$.",
                  calculation: "\\frac{x}{2}\\sqrt{3-x^{2}}+\\frac{3}{2}\\arcsin\\frac{x}{\\sqrt{3}}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\sqrt{3-x^{2}}\\,dx=\\frac{x}{2}\\sqrt{3-x^{2}}+\\frac{3}{2}\\arcsin\\frac{x}{\\sqrt{3}}+C$.",
                },
              ],
            },
            {
              id: "1.72",
              title: "$\\int\\sqrt{x^{2}+16}\\,dx$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{x^{2}+16}\\,dx$.",
              goal: "Përdorni formën hiperbolike / log për $\\sqrt{x^{2}+a^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Identifikoni $a=4$",
                  why: "$\\int\\sqrt{x^{2}+a^{2}}\\,dx=\\frac{x}{2}\\sqrt{x^{2}+a^{2}}+\\frac{a^{2}}{2}\\ln\\bigl|x+\\sqrt{x^{2}+a^{2}}\\bigr|+C$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "$\\frac{x}{2}\\sqrt{x^{2}+16}+8\\ln\\bigl|x+\\sqrt{x^{2}+16}\\bigr|+C$.",
                  calculation: "\\frac{x}{2}\\sqrt{x^{2}+16}+8\\ln\\bigl|x+\\sqrt{x^{2}+16}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\sqrt{x^{2}+16}\\,dx=\\frac{x}{2}\\sqrt{x^{2}+16}+8\\ln\\bigl|x+\\sqrt{x^{2}+16}\\bigr|+C$.",
                },
              ],
            },
            {
              id: "1.73",
              title: "$\\int\\sqrt{x^{2}-3}\\,dx$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{x^{2}-3}\\,dx$.",
              goal: "Përdorni formën log për $\\sqrt{x^{2}-a^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Identifikoni $a=\\sqrt{3}$",
                  why: "$\\int\\sqrt{x^{2}-a^{2}}\\,dx=\\frac{x}{2}\\sqrt{x^{2}-a^{2}}-\\frac{a^{2}}{2}\\ln\\bigl|x+\\sqrt{x^{2}-a^{2}}\\bigr|+C$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "$\\frac{x}{2}\\sqrt{x^{2}-3}-\\frac{3}{2}\\ln\\bigl|x+\\sqrt{x^{2}-3}\\bigr|+C$.",
                  calculation: "\\frac{x}{2}\\sqrt{x^{2}-3}-\\frac{3}{2}\\ln\\bigl|x+\\sqrt{x^{2}-3}\\bigr|+C",
                },
                {
                  id: "s3",
                  title: "Shënim për domenin",
                  why: "Kërkon $|x|\\ge\\sqrt{3}$.",
                },
              ],
            },
            {
              id: "1.74",
              title: "$\\int\\sqrt{ax^{2}+bx+c}\\,dx$ (metoda)",
              prompt: "Përshkruani si të llogaritni $\\displaystyle \\int \\sqrt{ax^{2}+bx+c}\\,dx$ për $a\\neq 0$.",
              goal: "Plotësoni katrorin dhe reduktoni në një nga tre integralet standarde me rrënjë.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "Zhvendosni $x$ që radikandi të bëhet $A(t^{2}\\pm k^{2})$ ose $A(k^{2}-t^{2})$.",
                },
                {
                  id: "s2",
                  title: "Zbatoni një formulë tabele",
                  why: "Përdorni formulat nga 1.69–1.73 pas rishkallëzimit $t=x+b/(2a)$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Anuloni zhvendosjen lineare për të shprehur përgjigjen në ndryshoren fillestare.",
                  notes: "Ky është shablloni i përgjithshëm pas 1.75–1.76.",
                },
              ],
            },
            {
              id: "1.75",
              title: "Shembull konkret $\\sqrt{-x^{2}+5x-3}$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{-x^{2}+5x-3}\\,dx$.",
              goal: "Plotësoni katrorin nën rrënjë, pastaj përdorni formulën $\\sqrt{a^{2}-t^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$-x^{2}+5x-3=-\\bigl((x-\\tfrac52)^{2}-\\tfrac{13}{4}\\bigr)=\\tfrac{13}{4}-\\bigl(x-\\tfrac52)^{2}$.",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=x-5/2$",
                  why: "Reduktoni në një konstante herë $\\int\\sqrt{(\\sqrt{13}/2)^{2}-t^{2}}\\,dt$.",
                },
                {
                  id: "s3",
                  title: "Zbatoni formulën e rrethit",
                  why: "Përfundoni me $\\tfrac{t}{2}\\sqrt{\\cdots}+\\tfrac{a^{2}}{2}\\arcsin(t/a)$ dhe kthehuni te $x$.",
                },
              ],
            },
            {
              id: "1.76",
              title: "Shembull konkret $\\sqrt{x^{2}+4x+3}$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt{x^{2}+4x+3}\\,dx$.",
              goal: "Plotësoni katrorin në $(x+2)^{2}-1$, pastaj përdorni formulën $\\sqrt{t^{2}-a^{2}}$.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$x^{2}+4x+3=(x+2)^{2}-1$.",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=x+2$",
                  why: "$\\int\\sqrt{t^{2}-1}\\,dt$.",
                },
                {
                  id: "s3",
                  title: "Integroni dhe kthehuni",
                  why: "$\\frac{t}{2}\\sqrt{t^{2}-1}-\\frac12\\ln\\bigl|t+\\sqrt{t^{2}-1}\\bigr|+C$, pastaj zëvendësoni $t=x+2$.",
                },
              ],
            },
            {
              id: "1.77",
              title: "Reduktim për $(ax^{2}+b)^{-n}$",
              prompt: "Derivoni një qasje reduktoni për $\\displaystyle I_{n}=\\int \\frac{dx}{(ax^{2}+b)^{n}}$.",
              goal: "Përdorni pjesët për të lidhur $I_{n}$ me $I_{n-1}$.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni një skemë reduktoni",
                  why: "Derivoni një thyesë ose zbatoni pjesët për të ulur fuqinë në emërues me një.",
                },
                {
                  id: "s2",
                  title: "Merrni rekurrencën",
                  why: "Marrëdhënia e librit lidh $I_{n}$ me $\\frac{x}{(ax^{2}+b)^{n-1}}$ dhe $I_{n-1}$.",
                },
                {
                  id: "s3",
                  title: "Rasti bazë",
                  why: "Kur $n=1$, $I_{1}=\\frac{1}{\\sqrt{ab}}\\arctan\\bigl(x\\sqrt{a/b}\\bigr)$ (për $a,b>0$), ose formë log nëse shenjat ndryshojnë.",
                  notes: "Përsëritni reduktimin derisa të arrini $I_{1}$.",
                },
              ],
            },
            {
              id: "1.78",
              title: "Reduktim për $(ax^{2}+bx+c)^{-n}$",
              prompt: "Përshkruani si të llogaritni $\\displaystyle \\int \\frac{dx}{(ax^{2}+bx+c)^{n}}$.",
              goal: "Plotësoni katrorin, pastaj zbatoni reduktimin e 1.77.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "Reduktoni në $\\int (At^{2}\\pm K)^{-n}\\,dt$.",
                },
                {
                  id: "s2",
                  title: "Zbatoni formulën e reduktimit",
                  why: "Ulni $n$ derisa integrali të jetë arktangjent ose logaritmik.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Zëvendësoni përsëri $t=x+b/(2a)$.",
                },
              ],
            },
            {
              id: "1.79",
              title: "Numërues linear mbi $(ax^{2}+bx+c)^{n}$",
              prompt: "Llogaritni integrale të formës $\\displaystyle \\int \\frac{ax+b}{(ax^{2}+bx+c)^{n}}\\,dx$.",
              goal: "Ndajeni në një pjesë derivati-i-emëruesit plus një konstante mbi një fuqi.",
              steps: [
                {
                  id: "s1",
                  title: "Përputhni derivatin",
                  why: "Shkruani $ax+b=\\alpha(2ax+b)+\\beta$.",
                },
                {
                  id: "s2",
                  title: "Pjesa e parë",
                  why: "$\\alpha\\int (ax^{2}+bx+c)^{-n}d(ax^{2}+bx+c)$ është integral fuqie në kuadratike.",
                },
                {
                  id: "s3",
                  title: "Mbetja",
                  why: "$\\beta\\int (ax^{2}+bx+c)^{-n}\\,dx$ trajtohet me 1.78.",
                },
              ],
            },
            {
              id: "1.80",
              title: "Shembull konkret me fuqi racionale",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{3x+5}{(4x^{2}+7x-3)^{3}}\\,dx$ (koeficientë të kësaj forme në libër).",
              goal: "Zbatoni ndarjen e 1.79, pastaj reduktoni fuqinë e mbetur.",
              steps: [
                {
                  id: "s1",
                  title: "Përputhni $8x+7$",
                  why: "Derivati i $4x^{2}+7x-3$ është $8x+7$; zgjidhni $3x+5=\\alpha(8x+7)+\\beta$.",
                },
                {
                  id: "s2",
                  title: "Integroni pjesën e përputhur",
                  why: "Prodhon një shumëfish të $(4x^{2}+7x-3)^{-2}$.",
                },
                {
                  id: "s3",
                  title: "Reduktoni mbetjen konstante",
                  why: "Plotësoni katrorin / reduktoni $\\int (\\cdots)^{-3}\\,dx$ të mbetur si në 1.78.",
                },
              ],
            },
            {
              id: "1.81",
              title: "Reduktim për $\\int\\sin^{n}x\\,dx$",
              prompt: "Derivoni formulën e reduktimit për $\\displaystyle I_{n}=\\int \\sin^{n}x\\,dx$.",
              goal: "Shkruani $\\sin^{n}x=\\sin^{n-1}x\\sin x$ dhe integroni me pjesë.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni pjesët",
                  why: "Le të jetë $u=\\sin^{n-1}x$, $dv=\\sin x\\,dx$, pra $du=(n-1)\\sin^{n-2}x\\cos x\\,dx$, $v=-\\cos x$.",
                },
                {
                  id: "s2",
                  title: "Rirregulloni",
                  why: "Merrni $I_{n}=-\\frac{\\sin^{n-1}x\\cos x}{n}+\\frac{n-1}{n}I_{n-2}$.",
                  formula: "I_{n}=-\\frac{\\sin^{n-1}x\\cos x}{n}+\\frac{n-1}{n}I_{n-2}",
                },
                {
                  id: "s3",
                  title: "Përsëritni",
                  why: "Përsëritni derisa të arrini $I_{0}=\\int dx=x$ ose $I_{1}=\\int\\sin x\\,dx=-\\cos x$.",
                  notes: "Ky është reduktimi klasik i tipit Wallis për fuqitë e sinusit.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "rational-functions",
      number: 6,
      title: "Integrimi i Funksioneve Racionale",
      description: "Thyesa të pjesshme: ndani $\\frac{P(x)}{Q(x)}$ në pjesë më të thjeshta që integrohen nga tabela.",
      exercises: "1.82–1.97",
      sections: [
        {
          id: "partial-fractions",
          title: "Zbërthimi në thyesa të pjesshme",
          summary: "Faktorizoni emëruesin, shkruani koeficientë të papërcaktuar, pastaj integroni term pas termi.",
          examples: [
            {
              id: "1.82",
              title: "Faktorë linearë të ndryshëm",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x(x+5)}$.",
              goal: "Ndajeni në thyesa të pjesshme dhe integroni logaritmet.",
              steps: [
                {
                  id: "s1",
                  title: "Vendosni thyesat e pjesshme",
                  why: "Emëruesi faktorizohet si $x(x+5)$ me rrënjë lineare të ndryshme.",
                  calculation: "\\frac{1}{x(x+5)}=\\frac{A}{x}+\\frac{B}{x+5}",
                },
                {
                  id: "s2",
                  title: "Zgjidhni $A$ dhe $B$",
                  why: "Pastrojeni: $1=A(x+5)+Bx$. Koeficientët japin $A=\\tfrac15$, $B=-\\tfrac15$.",
                  calculation: "\\frac{1}{x(x+5)}=\\frac15\\Bigl(\\frac{1}{x}-\\frac{1}{x+5}\\Bigr)",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Çdo term është logaritëm.",
                  calculation: "\\tfrac15\\ln\\Bigl|\\frac{x}{x+5}\\Bigr|+C",
                },
              ],
            },
            {
              id: "1.83",
              title: "Pjesëtim pastaj arktangjent",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{3}}{x^{2}+1}\\,dx$.",
              goal: "Së pari pjesëtoni; mbetja jep log dhe arktangjent.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni",
                  why: "$\\frac{x^{3}}{x^{2}+1}=x-\\frac{x}{x^{2}+1}$.",
                  calculation: "x-\\frac{x}{x^{2}+1}",
                },
                {
                  id: "s2",
                  title: "Rishkruani mbetjen",
                  why: "$\\int\\frac{x}{x^{2}+1}\\,dx=\\tfrac12\\ln(x^{2}+1)$.",
                  calculation: "\\int\\Bigl(x-\\frac{x}{x^{2}+1}\\Bigr)\\,dx",
                },
                {
                  id: "s3",
                  title: "Përfundoni",
                  why: "Forma e librit:",
                  calculation: "\\frac{x^{2}}{2}-\\frac12\\ln(x^{2}+1)+C",
                },
              ],
            },
            {
              id: "1.84",
              title: "Shkallë e lartë mbi $x^{2}-1$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{6}}{x^{2}-1}\\,dx$.",
              goal: "Pjesëtoni polinomet, pastaj ndani mbetjen e duhur.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni",
                  why: "$\\frac{x^{6}}{x^{2}-1}=x^{4}+x^{2}+1+\\frac{1}{x^{2}-1}$.",
                  calculation: "x^{4}+x^{2}+1+\\frac{1}{x^{2}-1}",
                },
                {
                  id: "s2",
                  title: "Thyesa të pjesshme",
                  why: "$\\frac{1}{x^{2}-1}=\\frac{1/2}{x-1}-\\frac{1/2}{x+1}$.",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Fuqitë integrohen nga tabela; pjesa tjetër janë logaritme.",
                  calculation: "\\frac{x^{5}}{5}+\\frac{x^{3}}{3}+x+\\tfrac12\\ln\\Bigl|\\frac{x-1}{x+1}\\Bigr|+C",
                },
              ],
            },
            {
              id: "1.85",
              title: "Faktorë linearë pas pjesëtimit",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{3}+1}{x^{2}-3x+2}\\,dx$.",
              goal: "Pjesëtoni me $(x-1)(x-2)$, pastaj integroni thyesat e pjesshme.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni",
                  why: "Pjesëtimi i polinomeve jep një herës linear plus një mbetje lineare mbi kuadratikën.",
                  calculation: "\\frac{x^{3}+1}{x^{2}-3x+2}=x+\\frac72+\\frac{\\frac72 x-5}{(x-1)(x-2)}",
                },
                {
                  id: "s2",
                  title: "Ndani",
                  why: "$\\frac{\\frac72 x-5}{(x-1)(x-2)}=\\frac{A}{x-1}+\\frac{B}{x-2}$ me $A=-\\tfrac12$, $B=9$.",
                  calculation: "-\\frac{1/2}{x-1}+\\frac{9}{x-2}",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Kombinoni herësin dhe logaritmet.",
                  calculation: "\\frac{x^{2}}{2}+\\frac72 x-\\frac12\\ln|x-1|+9\\ln|x-2|+C",
                },
              ],
            },
            {
              id: "1.86",
              title: "Faktori kubik $x^{3}+1$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{3}+1}$.",
              goal: "Faktorizoni $x^{3}+1=(x+1)(x^{2}-x+1)$ dhe ndani.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni dhe vendosni",
                  why: "$\\frac{1}{x^{3}+1}=\\frac{A}{x+1}+\\frac{Bx+D}{x^{2}-x+1}$.",
                  calculation: "\\frac{A}{x+1}+\\frac{Bx+D}{x^{2}-x+1}",
                },
                {
                  id: "s2",
                  title: "Zgjidhni koeficientët",
                  why: "$A=\\tfrac13$, $B=-\\tfrac13$, $D=\\tfrac23$.",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Pjesa lineare-mbi-kuadratike ndahet në log dhe arktangjent pasi plotësohet katrori.",
                  calculation: "\\tfrac13\\ln|x+1|-\\tfrac16\\ln(x^{2}-x+1)+\\tfrac{1}{\\sqrt3}\\arctan\\frac{2x-1}{\\sqrt3}+C",
                },
              ],
            },
            {
              id: "1.87",
              title: "Diferenca e fuqive të katërta",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{4}-1}$.",
              goal: "Faktorizoni $x^{4}-1=(x-1)(x+1)(x^{2}+1)$.",
              steps: [
                {
                  id: "s1",
                  title: "Thyesa të pjesshme",
                  why: "$\\frac{1}{x^{4}-1}=\\frac{A}{x-1}+\\frac{B}{x+1}+\\frac{Ex+F}{x^{2}+1}$.",
                  calculation: "A=\\tfrac14,\\ B=-\\tfrac14,\\ E=0,\\ F=-\\tfrac12",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "Logaritme nga faktorët linearë; arktangjent nga $x^{2}+1$.",
                  calculation: "\\tfrac14\\ln\\Bigl|\\frac{x-1}{x+1}\\Bigr|-\\tfrac12\\arctan x+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{x^{4}-1}=\\frac14\\ln\\bigl|\\frac{x-1}{x+1}\\bigr|-\\frac12\\arctan x+C$.",
                },
              ],
            },
            {
              id: "1.88",
              title: "$x^{4}+1$ me faktorë kuadratikë",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{4}+1}$.",
              goal: "Shkruani $x^{4}+1=(x^{2}+\\sqrt2 x+1)(x^{2}-\\sqrt2 x+1)$.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni",
                  why: "$x^{4}+1=(x^{2}+\\sqrt{2}x+1)(x^{2}-\\sqrt{2}x+1)$.",
                },
                {
                  id: "s2",
                  title: "Ndani",
                  why: "$\\frac{1}{x^{4}+1}=\\frac{Ax+B}{x^{2}+\\sqrt{2}x+1}+\\frac{Ex+F}{x^{2}-\\sqrt{2}x+1}$ me $A=-E=\\frac{1}{2\\sqrt2}$, $B=F=\\frac12$.",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Çdo pjesë është log i një kuadratike plus arktangjent pasi plotësohet katrori.",
                  calculation: "\\tfrac{1}{2\\sqrt2}\\ln\\frac{x^{2}+\\sqrt2 x+1}{x^{2}-\\sqrt2 x+1}+\\tfrac{1}{\\sqrt2}\\arctan(\\sqrt2 x+1)+\\tfrac{1}{\\sqrt2}\\arctan(\\sqrt2 x-1)+C",
                },
              ],
            },
            {
              id: "1.89",
              title: "Faktorë të përsëritur në një kuartik",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{3}+8x^{2}+6x+4}{x^{4}+4x^{3}+2x^{2}+4x+1}\\,dx$.",
              goal: "Ndajeni në thyesa të pjesshme sipas faktorizimit të librit.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni emëruesin",
                  why: "Libri faktorizon kuartikën dhe vendos koeficientë të papërcaktuar.",
                },
                {
                  id: "s2",
                  title: "Zgjidhni sistemin",
                  why: "Krahasimi i koeficientëve jep konstantet e zgjidhjes.",
                },
                {
                  id: "s3",
                  title: "Integroni term pas termi",
                  why: "Antiderivata është përzierje fuqish, logaritmesh dhe arktangjenti.",
                  calculation: "\\tfrac14\\ln|x|-\\tfrac14\\ln|x+2|-\\ln|x^{2}+2|-\\tfrac{3}{2x}-\\tfrac{1}{x+2}+\\tfrac{7}{4}\\arctan\\frac{x}{\\sqrt2}+C",
                },
              ],
            },
            {
              id: "1.90",
              title: "Zëvendësim për $x/(x^{8}-1)$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x}{x^{8}-1}\\,dx$.",
              goal: "Përdorni $t=x^{2}$ për të reduktuar në integralin 1.87.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësoni",
                  why: "Le të jetë $t=x^{2}$, $dt=2x\\,dx$, pra $\\tfrac12\\int\\frac{dt}{t^{4}-1}$.",
                  calculation: "\\tfrac12\\int\\frac{dt}{t^{4}-1}",
                },
                {
                  id: "s2",
                  title: "Ripërdorni 1.87",
                  why: "Zbatoni rezultatin e thyesave të pjesshme për $\\int\\frac{dt}{t^{4}-1}$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Zëvendësoni $t=x^{2}$.",
                  calculation: "\\tfrac18\\ln\\Bigl|\\frac{x^{2}-1}{x^{2}+1}\\Bigr|-\\tfrac14\\arctan(x^{2})+C",
                },
              ],
            },
            {
              id: "1.91",
              title: "Rishkrim i $(x^{8}-1)/(x(x^{8}+1))$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{8}-1}{x(x^{8}+1)}\\,dx$.",
              goal: "Shkruani algjebrikisht për të shmangur nëntë koeficientë.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani",
                  why: "$\\frac{x^{8}-1}{x(x^{8}+1)}=\\frac{1}{x}-\\frac{2x^{7}}{x^{8}+1}$.",
                  calculation: "\\frac{1}{x}-\\frac{2x^{7}}{x^{8}+1}",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "Termi i parë është $\\ln|x|$; i dyti $\\tfrac14\\ln(x^{8}+1)$ me $u=x^{8}+1$.",
                  calculation: "\\ln|x|-\\tfrac14\\ln|x^{8}+1|+C",
                },
                {
                  id: "s3",
                  title: "Kombinoni",
                  why: "$\\displaystyle \\ln\\Bigl|\\frac{x}{(x^{8}+1)^{1/4}}\\Bigr|+C$.",
                  calculation: "\\ln|x|-\\tfrac14\\ln|x^{8}+1|+C",
                },
              ],
            },
            {
              id: "1.92",
              title: "Zëvendësim fuqie në $1/(x^{6}-x^{3})$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{6}-x^{3}}$.",
              goal: "Faktorizoni dhe përdorni $t=1-1/x^{3}$.",
              steps: [
                {
                  id: "s1",
                  title: "Faktorizoni",
                  why: "$\\frac{1}{x^{6}-x^{3}}=\\frac{1}{x^{3}(x^{3}-1)}$.",
                  calculation: "\\frac{1}{x^{3}(x^{3}-1)}",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "Le të jetë $t=1-\\frac{1}{x^{3}}$.",
                },
                {
                  id: "s3",
                  title: "Integroni në $t$",
                  why: "Integranda bëhet zhvillim binomial / integral tabele në $t$; kthehuni te $x$.",
                },
              ],
            },
            {
              id: "1.93",
              title: "Tre faktorë linearë/fuqi",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{2}(x-1)}$.",
              goal: "Ndajeni në $\\frac{A}{x}+\\frac{B}{x^{2}}+\\frac{D}{x-1}$.",
              steps: [
                {
                  id: "s1",
                  title: "Thyesa të pjesshme",
                  why: "$\\frac{1}{x^{2}(x-1)}=\\frac{A}{x}+\\frac{B}{x^{2}}+\\frac{D}{x-1}$.",
                  calculation: "A=-1,\\ B=-1,\\ D=1",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$-\\ln|x|+\\frac{1}{x}+\\ln|x-1|+C$.",
                  calculation: "\\ln\\Bigl|\\frac{x-1}{x}\\Bigr|+\\frac{1}{x}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{dx}{x^{2}(x-1)}=\\ln\\bigl|\\frac{x-1}{x}\\bigr|+\\frac{1}{x}+C$.",
                },
              ],
            },
            {
              id: "1.94",
              title: "Emërues kuartik simetrik",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}+1}{x^{4}+3x^{2}+1}\\,dx$.",
              goal: "Pjesëtoni me $x^{2}$ (ose $t=x-1/x$) për të shfrytëzuar simetrinë.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni me $x^{2}$",
                  why: "$\\int\\frac{1+1/x^{2}}{x^{2}+3+1/x^{2}}\\,dx$.",
                  calculation: "\\int\\frac{1+x^{-2}}{(x-x^{-1})^{2}+5}\\,dx",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni $t=x-1/x$",
                  why: "$dt=(1+1/x^{2})\\,dx$, emëruesi $t^{2}+5$.",
                  calculation: "\\int\\frac{dt}{t^{2}+5}",
                },
                {
                  id: "s3",
                  title: "Përfundoni",
                  why: "$\\frac{1}{\\sqrt5}\\arctan\\frac{t}{\\sqrt5}+C$.",
                  calculation: "\\frac{1}{\\sqrt5}\\arctan\\frac{x^{2}-1}{x\\sqrt5}+C",
                },
              ],
            },
            {
              id: "1.95",
              title: "Fuqi çift mbi $x^{6}-1$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{4}+1}{x^{6}-1}\\,dx$.",
              goal: "Ndajeni në pjesë që reduktohen me $t=x-1/x$ dhe $t=x^{3}$.",
              steps: [
                {
                  id: "s1",
                  title: "Ndarje algjebrike",
                  why: "Shkruani integrandën si shumë që izolon modelet e tipit 1.94 dhe një faktor kubik.",
                },
                {
                  id: "s2",
                  title: "Trajtoni $I_1$",
                  why: "Përdorni $t=x-1/x$ si në 1.94.",
                },
                {
                  id: "s3",
                  title: "Trajtoni $I_2$",
                  why: "Me $t=x^{3}$ integrali i dytë bëhet $\\int\\frac{dt}{t^{2}-1}$.",
                  calculation: "\\text{Kombinoni të dy antiderivatat dhe shtoni }+C",
                },
              ],
            },
            {
              id: "1.96",
              title: "Emërues i tipit ciklotomik",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}-1}{x^{4}+x^{3}+x^{2}+x+1}\\,dx$.",
              goal: "Njohni $x^{5}-1=(x-1)(\\cdots)$ dhe zëvendësoni $t=x+1/x$.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni me $x^{2}$",
                  why: "$\\int\\frac{1-1/x^{2}}{(x+x^{-1})^{2}+(x+x^{-1})-1}\\,dx$.",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=x+1/x$",
                  why: "$dt=(1-1/x^{2})\\,dx$.",
                  calculation: "\\int\\frac{dt}{t^{2}+t-1}",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Plotësoni katrorin / logaritme në $t$, pastaj kthehuni te $x$.",
                  calculation: "\\tfrac{2}{\\sqrt5}\\artanh\\Bigl(\\frac{2t+1}{\\sqrt5}\\Bigr)+C",
                },
              ],
            },
            {
              id: "1.97",
              title: "Familja $\\int(x^{2n}-1)/(x^{n}+1)\\,dx$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2n}-1}{x^{n}+1}\\,dx$ për $n\\in\\mathbb{N}$.",
              goal: "Faktorizoni ose rishkruani, pastaj zëvendësoni nëse duhet.",
              steps: [
                {
                  id: "s1",
                  title: "Identiteti algjebrik",
                  why: "$\\frac{x^{2n}-1}{x^{n}+1}=x^{n}-1$.",
                  calculation: "x^{n}-1",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int(x^{n}-1)\\,dx=\\frac{x^{n+1}}{n+1}-x+C$.",
                  calculation: "\\frac{x^{n+1}}{n+1}-x+C",
                },
                {
                  id: "s3",
                  title: "Shënim",
                  why: "Nëse libri trajton $\\int\\frac{x^{2n}-1}{x^{2n}+1}\\,dx$, rishkruani si $1-\\frac{2}{x^{2n}+1}$.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "irrational-functions",
      number: 7,
      title: "Integrimi i Funksioneve Irracionale",
      description: "Zëvendësime racionalizuese që e kthejnë rrënjën në integrandë racionale.",
      exercises: "1.98–1.106",
      sections: [
        {
          id: "roots",
          title: "Zëvendësime me rrënjë",
          summary: "Zgjidhni një fuqi të një shprehjeje lineare (ose thyesore-lineare) që pastron çdo rrënjë menjëherë.",
          examples: [
            {
              id: "1.98",
              title: "Pastrimi i $\\sqrt{x}$ dhe $\\sqrt[3]{x}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\sqrt{x}+\\sqrt[3]{x}}$.",
              goal: "Përdorni $t=x^{1/6}$ që të dyja rrënjët të bëhen fuqi të plota të $t$.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni MPM e indekseve",
                  why: "Indekset $2$ dhe $3$ kanë MPM $6$, prandaj $x=t^{6}$.",
                  calculation: "x=t^{6},\\ dx=6t^{5}\\,dt,\\ \\sqrt{x}=t^{3},\\ \\sqrt[3]{x}=t^{2}",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "$\\int\\frac{6t^{5}}{t^{3}+t^{2}}\\,dt=6\\int\\frac{t^{3}}{t+1}\\,dt$.",
                  calculation: "6\\int(t^{2}-t+1-\\tfrac{1}{t+1})\\,dt",
                },
                {
                  id: "s3",
                  title: "Integroni dhe kthehuni",
                  why: "$2t^{3}-3t^{2}+6t-6\\ln|t+1|+C$ me $t=x^{1/6}$.",
                  calculation: "2x^{1/2}-3x^{1/3}+6x^{1/6}-6\\ln|x^{1/6}+1|+C",
                },
              ],
            },
            {
              id: "1.99",
              title: "Integrimi i $1/(\\sqrt[4]{x+1}+1)$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\sqrt[4]{x+1}+1}$.",
              goal: "Vendosni $t=\\sqrt[4]{x+1}$, pastaj reduktoni integrandën racionale.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësoni",
                  why: "$x=t^{4}-1$, $dx=4t^{3}\\,dt$.",
                  calculation: "\\int\\frac{4t^{3}}{t+1}\\,dt=4\\int\\bigl(t^{2}-t+1-\\tfrac{1}{t+1}\\bigr)\\,dt",
                },
                {
                  id: "s2",
                  title: "Integroni në $t$",
                  why: "$\\frac{4}{3}t^{3}-2t^{2}+4t-4\\ln|t+1|+C$.",
                  calculation: "\\tfrac43 t^{3}-2t^{2}+4t-4\\ln|t+1|+C",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Zëvendësoni $t=\\sqrt[4]{x+1}$.",
                  calculation: "\\tfrac43(x+1)^{3/4}-2\\sqrt{x+1}+4\\sqrt[4]{x+1}-4\\ln|\\sqrt[4]{x+1}+1|+C",
                },
              ],
            },
            {
              id: "1.100",
              title: "Rrënja e një shprehjeje kubike",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}+x}{\\sqrt[3]{x^{3}+2}}\\,dx$.",
              goal: "Vendosni $t^{3}=x^{3}+2$ që $t^{2}\\,dt=x^{2}\\,dx$.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësoni",
                  why: "$t^{3}=x^{3}+2$. Shprehni numëruesin me $x^{3}=t^{3}-2$.",
                },
                {
                  id: "s2",
                  title: "Reduktoni",
                  why: "Integrali bëhet funksion racional i $t$; ndajeni si në kapitullin 6.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Shkruani antiderivatën me $\\sqrt[3]{x^{3}+2}$.",
                },
              ],
            },
            {
              id: "1.101",
              title: "Fuqi të $(x-a)$ dhe $(x-b)$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{(x-a)^{n+1}(x-b)^{n}}$ për $n\\in\\mathbb{N}$.",
              goal: "Zëvendësoni $t^{n}=\\dfrac{x-b}{x-a}$.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësoni",
                  why: "$t^{n}=\\frac{x-b}{x-a}$ jep $x$ dhe $dx$ në terma të $t$.",
                },
                {
                  id: "s2",
                  title: "Thjeshtoni integrandën",
                  why: "Fuqitë anulohen dhe mbetet një shumëfish i $\\int t^{-2}\\,dt$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "$\\dfrac{n}{b-a}\\Bigl(\\dfrac{x-a}{x-b}\\Bigr)^{1/n}+C$.",
                  calculation: "\\frac{n}{b-a}\\Bigl(\\frac{x-a}{x-b}\\Bigr)^{1/n}+C",
                },
              ],
            },
            {
              id: "1.102",
              title: "Linear mbi $\\sqrt{x^{2}-2x}$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x\\,dx}{\\sqrt{x^{2}-2x}}$.",
              goal: "Plotësoni katrorin / shkruani si pjesë derivati plus konstante mbi rrënjë.",
              steps: [
                {
                  id: "s1",
                  title: "Plotësoni katrorin",
                  why: "$x^{2}-2x=(x-1)^{2}-1$.",
                },
                {
                  id: "s2",
                  title: "Ndani numëruesin",
                  why: "Shkruani $x=(x-1)+1$.",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Pjesa e përputhur është $\\sqrt{x^{2}-2x}$; mbetja është standard.",
                  calculation: "\\sqrt{x^{2}-2x}+\\ln|x-1+\\sqrt{x^{2}-2x}|+C",
                },
              ],
            },
            {
              id: "1.103",
              title: "Zëvendësim reciprok $t=1+1/x$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x^{3/5}(x+1)^{2/5}}$.",
              goal: "Vendosni $t=1+\\frac{1}{x}=\\frac{x+1}{x}$.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësoni",
                  why: "$t=\\frac{x+1}{x}$, $x=\\frac{1}{t-1}$, $dx=-\\frac{dt}{(t-1)^{2}}$.",
                },
                {
                  id: "s2",
                  title: "Thjeshtoni",
                  why: "Integranda bëhet fuqi racionale e $t$.",
                },
                {
                  id: "s3",
                  title: "Integroni dhe kthehuni",
                  why: "$\\frac{5}{3}\\bigl(\\frac{x+1}{x}\\bigr)^{3/5}+C$.",
                  calculation: "\\tfrac53\\Bigl(\\frac{x+1}{x}\\Bigr)^{3/5}+C",
                },
              ],
            },
            {
              id: "1.104",
              title: "Kuartik nën rrënjë katrore",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}+1}{\\sqrt{x^{4}+4x^{2}+8}}\\,dx$.",
              goal: "Përdorni strukturën $(x^{2}+2)^{2}+(2x)^{2}$ dhe zëvendësime Ojler.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani radikandin",
                  why: "$x^{4}+4x^{2}+8=(x^{2}+2)^{2}+4x^{2}$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësim Ojler",
                  why: "Vendosni një lidhje lineare/kuadratike midis $\\sqrt{\\cdots}$ dhe $x$.",
                },
                {
                  id: "s3",
                  title: "Përfundoni",
                  why: "Reduktoni në integrale racionale dhe kthehuni te $x$.",
                },
              ],
            },
            {
              id: "1.105",
              title: "Kuadratike joproporionale nën rrënjë",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x-1}{(x^{2}-x+1)\\sqrt{x^{2}+1}}\\,dx$.",
              goal: "Përdorni zëvendësimin $x=\\frac{t-1}{t+1}$ që heq termat linearë.",
              steps: [
                {
                  id: "s1",
                  title: "Zgjidhni $a,b$",
                  why: "Libri gjen $a=1$, $b=-1$, pra $x=\\frac{t-1}{t+1}$.",
                },
                {
                  id: "s2",
                  title: "Ndani në $I_1-I_2$",
                  why: "Pas zëvendësimit integrali ndahet në arktangjent dhe logaritëm.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Rimbledhni në ndryshoren fillestare.",
                  calculation: "\\tfrac12\\arctan\\frac{x-1}{x+1}-\\tfrac14\\ln\\Bigl|\\frac{\\sqrt{x^{2}+1}-1}{\\sqrt{x^{2}+1}+1}\\Bigr|+C",
                },
              ],
            },
            {
              id: "1.106",
              title: "Rasti i dytë Ojler $bp=a$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x+2}{(x^{2}-3x+2)\\sqrt{x^{2}-2x}}\\,dx$.",
              goal: "Kur përputhet rasti i librit, vendosni $t=x+\\frac{p}{x}$.",
              steps: [
                {
                  id: "s1",
                  title: "Identifikoni rastin",
                  why: "Libri shënon $bp=a$ dhe vendos $t=x-\\frac{1}{x}$.",
                },
                {
                  id: "s2",
                  title: "Reduktoni",
                  why: "Integrali bëhet shumë integralesh racionale në $t$.",
                },
                {
                  id: "s3",
                  title: "Kthehuni te $x$",
                  why: "Shprehni logaritmet dhe termat algjebrikë përmes $t(x)$.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "trigonometric-integrals",
      number: 8,
      title: "Zëvendësimet Ojler dhe Integralet Binomiale",
      description: "Zëvendësimet Ojler për $\\sqrt{ax^{2}+bx+c}$ dhe lista e kontrollit binomiale për $\\int x^{m}(a+bx^{n})^{p}\\,dx$.",
      exercises: "1.107–1.112",
      sections: [
        {
          id: "euler-binomial",
          title: "Zëvendësimet Ojler dhe rrënjët binomiale",
          summary: "Zgjidhni formën Ojler nga shenja e $a$ ose $c$, ose zbatoni testet e fuqive racionale binomiale.",
          examples: [
            {
              id: "1.107",
              title: "Zëvendësim Ojler për rrënjën e kuadratikes",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{x+\\sqrt{x^{2}+x+1}}$.",
              goal: "Me $a=1>0$, vendosni $\\sqrt{x^{2}+x+1}=t-x$.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësim Ojler",
                  why: "Vendosni $\\sqrt{x^{2}+x+1}=t-x$. Me ngritje në katror: $x=\\frac{t^{2}-1}{2t+1}$.",
                  calculation: "x=\\frac{t^{2}-1}{2t+1}",
                },
                {
                  id: "s2",
                  title: "Shprehni $dx$",
                  why: "Diferencioni jep $dx$ si funksion racional i $t$.",
                },
                {
                  id: "s3",
                  title: "Integroni në $t$",
                  why: "Libri redukton në logaritme në $t$; kthehuni me $t=x+\\sqrt{x^{2}+x+1}$.",
                  calculation: "\\ln|t|-\\tfrac32\\ln|2t+1|+C",
                },
              ],
            },
            {
              id: "1.108",
              title: "Zëvendësim Ojler kur $c>0$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\sqrt{x^{2}-x+2}}$.",
              goal: "Me $c=2>0$, vendosni $\\sqrt{x^{2}-x+2}=1-tx$.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësim Ojler",
                  why: "Vendosni $\\sqrt{x^{2}-x+2}=1-tx$. Ngrini në katror dhe zgjidhni për $x$.",
                },
                {
                  id: "s2",
                  title: "Reduktoni",
                  why: "Integrali bëhet racional në $t$.",
                },
                {
                  id: "s3",
                  title: "Integroni dhe kthehuni",
                  why: "Përgjigje logaritmike në $t$, me $t=\\frac{1-\\sqrt{x^{2}-x+2}}{x}$.",
                },
              ],
            },
            {
              id: "1.109",
              title: "Kuadratike e përbashkët nën rrënjë",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x^{2}-x+1}{(x^{2}+x+1)\\sqrt{x^{2}+x+1}}\\,dx$.",
              goal: "Vendosni $t\\sqrt{x^{2}+x+1}=x+\\frac12$.",
              steps: [
                {
                  id: "s1",
                  title: "Përcaktoni zëvendësimin",
                  why: "Me $x^{2}+x+1$ jashtë dhe nën rrënjë, vendosni $t\\sqrt{x^{2}+x+1}=x+\\frac12$.",
                },
                {
                  id: "s2",
                  title: "Diferencioni",
                  why: "Merrni $dx$ në terma të $t$ dhe anuloni radikandin.",
                },
                {
                  id: "s3",
                  title: "Përfundoni",
                  why: "Rezultati është elementar në $t$; kthehuni te $x$.",
                },
              ],
            },
            {
              id: "1.110",
              title: "Rrënjë binomiale me diferencial të përputhur",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{x\\,dx}{\\sqrt[3]{x^{2}+1}}$.",
              goal: "Vendosni $t^{3}=x^{2}+1$ që $3t^{2}\\,dt=2x\\,dx$.",
              steps: [
                {
                  id: "s1",
                  title: "Zëvendësoni",
                  why: "$t^{3}=x^{2}+1$, $3t^{2}\\,dt=2x\\,dx$.",
                  calculation: "\\int\\frac{x\\,dx}{\\sqrt[3]{x^{2}+1}}=\\tfrac32\\int t\\,dt",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\tfrac34 t^{2}+C$.",
                  calculation: "\\tfrac34(x^{2}+1)^{2/3}+C",
                },
                {
                  id: "s3",
                  title: "Shkruani përgjigjen",
                  why: "$\\displaystyle \\int\\frac{x\\,dx}{\\sqrt[3]{x^{2}+1}}=\\frac34(x^{2}+1)^{2/3}+C$.",
                },
              ],
            },
            {
              id: "1.111",
              title: "Kriteri binomial $\\frac{m+1}{n}+p\\in\\mathbb{Z}$",
              prompt: "Llogaritni $\\displaystyle \\int x\\sqrt[3]{x^{3}-1}\\,dx$.",
              goal: "Këtu $\\frac{m+1}{n}+p\\in\\mathbb{Z}$, prandaj përdorni zëvendësim të tipit reciprok.",
              steps: [
                {
                  id: "s1",
                  title: "Kontrolloni kriterin",
                  why: "Me $m=1$, $n=3$, $p=\\frac13$, kemi $\\frac{m+1}{n}+p\\in\\mathbb{Z}$.",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "Ndiqni librin me $t^{3}=1-\\frac{1}{x^{3}}$.",
                },
                {
                  id: "s3",
                  title: "Integroni në $t$",
                  why: "Reduktoni në integral racional dhe kthehuni te $x$.",
                },
              ],
            },
            {
              id: "1.112",
              title: "Kriteri binomial $\\frac{m+1}{n}\\in\\mathbb{Z}$",
              prompt: "Llogaritni $\\displaystyle \\int \\sqrt[3]{x^{4}+x}\\,dx$.",
              goal: "Rishkruani si $x^{1/3}(x^{3}+1)^{1/3}$ dhe përdorni testin $\\frac{m+1}{n}\\in\\mathbb{Z}$.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani",
                  why: "$\\sqrt[3]{x^{4}+x}=x^{1/3}(x^{3}+1)^{1/3}$.",
                  calculation: "x^{1/3}(x^{3}+1)^{1/3}",
                },
                {
                  id: "s2",
                  title: "Zbatoni zëvendësimin binomial",
                  why: "Me $\\frac{m+1}{n}\\in\\mathbb{Z}$, vendosni $x^{3}+1=t^{3}$.",
                },
                {
                  id: "s3",
                  title: "Integroni në $t$",
                  why: "Reduktoni, integroni dhe kthehuni te $x$.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "trigonometric-applications",
      number: 9,
      title: "Integrimi i Funksioneve Trigonometrike",
      description: "Funksione racionale të sinusit dhe kosinusit me $t=\\tan(x/2)$ ose shkurtore simetrie.",
      exercises: "1.113–1.120",
      sections: [
        {
          id: "weierstrass",
          title: "Weierstrass dhe truket e simetrisë",
          summary: "Kur $R(\\sin x,\\cos x)$ është racional, zëvendësimi i gjysmë-këndit (ose një shkurtore çiftësie) e racionalizon integralin.",
          examples: [
            {
              id: "1.113",
              title: "Zëvendësimi i gjysmë-këndit",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\sin x+\\cos x+3}$.",
              goal: "Përdorni $t=\\tan(x/2)$ për ta kthyer në integral racional në $t$.",
              steps: [
                {
                  id: "s1",
                  title: "Formulat e Weierstrass",
                  why: "Çdo funksion trig bëhet racional në $t=\\tan(x/2)$.",
                  formula: "t=\\tan\\tfrac{x}{2},\\ \\sin x=\\frac{2t}{1+t^{2}},\\ \\cos x=\\frac{1-t^{2}}{1+t^{2}},\\ dx=\\frac{2\\,dt}{1+t^{2}}",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "Emëruesi dhe diferencialii kombinohen në një kuadratike në $t$.",
                  calculation: "\\int\\frac{2\\,dt}{5-(t-1)^{2}}",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Plotësoni katrorin në arktangjent në $t=\\tan(x/2)$.",
                  calculation: "\\tfrac{2}{\\sqrt5}\\arctan\\frac{\\tan(x/2)-1}{\\sqrt5}+C",
                },
              ],
            },
            {
              id: "1.114",
              title: "Shkurtore simetrie $t=\\tan x$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{\\sin x-\\cos x}{\\sin x+\\cos x}\\,dx$.",
              goal: "Përdorni simetrinë teke/çift të $\\sin$ dhe $\\cos$ për $t=\\tan x$.",
              steps: [
                {
                  id: "s1",
                  title: "Pjesëtoni me $\\cos x$",
                  why: "$\\frac{\\tan x-1}{\\tan x+1}$.",
                  calculation: "\\frac{\\tan x-1}{\\tan x+1}",
                },
                {
                  id: "s2",
                  title: "Vendosni $t=\tan x$",
                  why: "Atëherë $dt=\\sec^{2}x\\,dx=(1+t^{2})\\,dx$.",
                  calculation: "\\int\\frac{t-1}{t+1}\\,dt",
                },
                {
                  id: "s3",
                  title: "Përfundoni",
                  why: "$t-2\\ln|t+1|+C=\\tan x-2\\ln|\\tan x+1|+C$.",
                  calculation: "\\tan x-2\\ln|\\tan x+1|+C",
                },
              ],
            },
            {
              id: "1.115",
              title: "Integrandë çift në sinus dhe kosinus",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{\\cos^{2}x}{\\cos^{4}x+\\sin^{4}x+\\sin^{2}2x}\\,dx$.",
              goal: "Përdorni rregullën e çiftësisë për $t=\\sin x$.",
              steps: [
                {
                  id: "s1",
                  title: "Verifikoni rregullën",
                  why: "Libri lejon $t=\\sin x$ për këtë funksion racional.",
                },
                {
                  id: "s2",
                  title: "Zëvendësoni",
                  why: "Rishkruani në $\\sin x$ dhe $d(\\sin x)$.",
                },
                {
                  id: "s3",
                  title: "Integroni",
                  why: "Merrni një integral racional në $t=\\sin x$ dhe kthehuni.",
                },
              ],
            },
            {
              id: "1.116",
              title: "$1/(\\sin^{6}x+\\cos^{6}x)$",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{dx}{\\sin^{6}x+\\cos^{6}x}$.",
              goal: "Reduktoni me identitete, pastaj integroni formën me kënd të dyfishtë.",
              steps: [
                {
                  id: "s1",
                  title: "Rishkruani",
                  why: "$\\sin^{6}x+\\cos^{6}x=1-3\\sin^{2}x\\cos^{2}x=1-\\tfrac34\\sin^{2}2x$.",
                  calculation: "1-\\tfrac34\\sin^{2}2x",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\int\\frac{dx}{1-\\frac34\\sin^{2}2x}$ është standard pas $u=2x$ ose $t=\\tan 2x$.",
                },
                {
                  id: "s3",
                  title: "Forma e mbyllur",
                  why: "Libri e shpreh përgjigjen me arktangjent në $\\tan 2x$.",
                },
              ],
            },
            {
              id: "1.117",
              title: "Kombinimi linear i sinusit dhe kosinusit",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{a\\sin x+b\\cos x}{c\\sin x+d\\cos x}\\,dx$.",
              goal: "Shkruani numëruesin si $\\alpha$ herë derivati i emëruesit plus një shumëfish i emëruesit.",
              steps: [
                {
                  id: "s1",
                  title: "Përputhni derivatin",
                  why: "Derivati i emëruesit është $c\\cos x-d\\sin x$. Zgjidhni $\\alpha,\\beta$.",
                },
                {
                  id: "s2",
                  title: "Integroni",
                  why: "$\\alpha\\ln|c\\sin x+d\\cos x|+\\beta\\int\\frac{dx}{c\\sin x+d\\cos x}$.",
                },
                {
                  id: "s3",
                  title: "Përfundoni mbetjen",
                  why: "Integrali i mbetur përdor Weierstrass ose zhvendosje faze.",
                },
              ],
            },
            {
              id: "1.118",
              title: "Kombinimi linear konkret",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{\\sin x-3\\cos x}{4\\sin x+5\\cos x}\\,dx$.",
              goal: "E njëjta ndarje si 1.117 me koeficientë eksplicitë.",
              steps: [
                {
                  id: "s1",
                  title: "Përputhni koeficientët",
                  why: "Shkruani $\\sin x-3\\cos x=A(4\\cos x-5\\sin x)+B(4\\sin x+5\\cos x)$.",
                },
                {
                  id: "s2",
                  title: "Integroni pjesën log",
                  why: "$A\\ln|4\\sin x+5\\cos x|$.",
                },
                {
                  id: "s3",
                  title: "Integroni mbetjen konstante",
                  why: "$B\\int\\frac{dx}{4\\sin x+5\\cos x}$ me Weierstrass ose $R\\sin(x-\\phi)$.",
                },
              ],
            },
            {
              id: "1.119",
              title: "Numërues dhe emërues afinë",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{a\\sin x+b\\cos x+c}{c\\sin x+d\\cos x+e}\\,dx$.",
              goal: "Nëse pjesa lineare e emëruesit zhduket, integrali është tabelor; përndryshe përputhni një shumëfish të derivatit.",
              steps: [
                {
                  id: "s1",
                  title: "Rasti jodegjenerues",
                  why: "Supozoni $c^{2}+d^{2}\\neq0$. Përputhni $\\alpha$ herë derivatin e emëruesit.",
                },
                {
                  id: "s2",
                  title: "Mbetja",
                  why: "Mbetet $\\int\\frac{dx}{R\\sin(x-\\phi)+e}$.",
                },
                {
                  id: "s3",
                  title: "Weierstrass",
                  why: "Përfundoni me $t=\\tan(x/2)$ nëse duhet.",
                },
              ],
            },
            {
              id: "1.120",
              title: "Kuadratike mbi lineare në sinus dhe kosinus",
              prompt: "Llogaritni $\\displaystyle \\int \\frac{\\sin^{2}x+\\cos x-1}{\\sin x+\\cos x-2}\\,dx$.",
              goal: "Përputhni $A(\\cos x-\\sin x)+B(\\sin x+\\cos x)+E$ me numëruesin.",
              steps: [
                {
                  id: "s1",
                  title: "Përputhni derivatin",
                  why: "Derivati i emëruesit është $\\cos x-\\sin x$. Zgjidhni $A,B,E$.",
                },
                {
                  id: "s2",
                  title: "Integroni pjesën log",
                  why: "$A\\ln|\\sin x+\\cos x-2|$.",
                },
                {
                  id: "s3",
                  title: "Përfundoni mbetjen",
                  why: "Trajtoni pjesët e mbetura si në 1.117–1.119.",
                  calculation: "A\\ln|\\sin x+\\cos x-2|+(\\text{mbetje elementare})+C",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
