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
      id: 'introduction-theory',
      number: 1,
      title: 'Hyrje në Teorinë e Integrimit',
      description:
        'Funksionet primitive, integrali i pacaktuar dhe tabela bazë e antiderivateve.',
      exercises: '1.4–1.14',
      sections: [
        {
          id: 'basics',
          title: 'Funksionet primitive dhe tabela bazë',
          summary:
            'Ktheni derivimin me rregullën e fuqisë dhe formulat elementare, duke mbajtur gjithmonë $+C$.',
          examples: [
            {
              id: 'ex-1-4',
              title: 'Rregulla e fuqisë për $x^5$',
              prompt: 'Llogaritni $\\displaystyle \\int x^{5}\\,dx$.',
              goal: 'Përdorni rregullën e fuqisë nga tabela bazë.',
              steps: [
                {
                  id: 's1',
                  title: 'Kujtoni rregullën e fuqisë',
                  why: 'Për $n\\neq -1$, integrimi i $x^n$ e rrit eksponentin me një dhe e pjesëton me eksponentin e ri.',
                  formula: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)',
                },
                {
                  id: 's2',
                  title: 'Zëvendësoni $n=5$',
                  why: 'Këtu eksponenti është $5$, prandaj antiderivata është $\\frac{x^{6}}{6}$.',
                  calculation: '\\int x^{5}\\,dx = \\frac{x^{6}}{6}+C',
                },
              ],
            },
            {
              id: 'ex-1-10',
              title: 'Lineariteti mbi një shumë',
              prompt: 'Llogaritni $\\displaystyle \\int\\bigl(2-3\\sin x+\\cos x\\bigr)\\,dx$.',
              goal: 'Ndani integralin dhe integroni çdo term me tabelën bazë.',
              steps: [
                {
                  id: 's1',
                  title: 'Përdorni linearitetin',
                  why: 'Integrali i një shume është shuma e integraleve.',
                  formula: '\\int\\bigl(f+g\\bigr)=\\int f+\\int g',
                  calculation:
                    '\\int(2-3\\sin x+\\cos x)\\,dx = \\int 2\\,dx - 3\\int\\sin x\\,dx + \\int\\cos x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Integroni çdo pjesë',
                  why: 'Përdorni $\\int 2\\,dx=2x$, $\\int\\sin x\\,dx=-\\cos x$ dhe $\\int\\cos x\\,dx=\\sin x$.',
                  calculation: '2x + 3\\cos x + \\sin x + C',
                },
              ],
            },
            {
              id: 'ex-1-13',
              title: 'Rishkruani para integrimit',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{x^{2}}{1+x^{2}}\\,dx$.',
              goal: 'Rishkruani algjebrikisht integrandën që të shfaqet një formulë e tabelës.',
              steps: [
                {
                  id: 's1',
                  title: 'Ndani thyesën',
                  why: 'Shkruani numëruesin si $(1+x^{2})-1$ që thyesa të bëhet $1$ minus një integrandë standarde e arktangjentit.',
                  calculation:
                    '\\frac{x^{2}}{1+x^{2}} = \\frac{(1+x^{2})-1}{1+x^{2}} = 1 - \\frac{1}{1+x^{2}}',
                },
                {
                  id: 's2',
                  title: 'Integroni',
                  why: 'Tani përdorni $\\int 1\\,dx=x$ dhe $\\int\\frac{1}{1+x^{2}}\\,dx=\\arctan x$.',
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
      title: 'Metoda e Zëvendësimit',
      description:
        'Ndryshimi i ndryshores: zgjidhni funksionin e brendshëm derivati i të cilit shfaqet në integrandë.',
      exercises: '1.16–1.29',
      sections: [
        {
          id: 'u-sub',
          title: 'Zëvendësimet bazë me $u$',
          summary:
            'Njohni kompozimet dhe zëvendësoni shprehjen e brendshme me $u$ që integrali të bëhet tabelor.',
          examples: [
            {
              id: 'ex-1-16',
              title: 'Shprehje lineare brenda një fuqie',
              prompt: 'Llogaritni $\\displaystyle \\int (2x+5)^{5}\\,dx$.',
              goal: 'Zëvendësoni shprehjen lineare brenda fuqisë.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni $u$',
                  why: 'Pjesa lineare e brendshme $2x+5$ është një zëvendësim natyror.',
                  calculation: 'u = 2x+5 \\implies du = 2\\,dx \\implies dx = \\tfrac{1}{2}\\,du',
                },
                {
                  id: 's2',
                  title: 'Integroni në $u$',
                  why: 'Integrali bëhet një fuqi e pastër e $u$.',
                  calculation:
                    '\\int u^{5}\\cdot\\tfrac{1}{2}\\,du = \\tfrac{1}{2}\\cdot\\frac{u^{6}}{6}+C = \\frac{u^{6}}{12}+C',
                },
                {
                  id: 's3',
                  title: 'Kthehuni te $x$',
                  why: 'Zëvendësoni $u$ me $2x+5$.',
                  calculation: '\\frac{(2x+5)^{6}}{12}+C',
                },
              ],
            },
            {
              id: 'ex-1-18',
              title: 'Derivati në numërues',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{2x}{1+x^{2}}\\,dx$.',
              goal: 'Përputhni numëruesin me derivatin e emëruesit.',
              steps: [
                {
                  id: 's1',
                  title: 'Vendosni $u=1+x^{2}$',
                  why: 'Atëherë $du=2x\\,dx$, që është saktësisht faktori i mbetur.',
                  calculation: 'u=1+x^{2},\\quad du=2x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Integroni',
                  why: 'Integrali reduktohet në $\\int\\frac{1}{u}\\,du$.',
                  calculation: '\\int\\frac{1}{u}\\,du = \\ln|u|+C = \\ln|1+x^{2}|+C',
                },
              ],
            },
            {
              id: 'ex-1-22',
              title: 'Model zëvendësimi trigonometrik',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{\\cos x}{4+\\sin x}\\,dx$.',
              goal: 'Lejoni që $u$ të jetë shprehja derivati i së cilës është në numërues.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni $u=4+\\sin x$',
                  why: 'Derivimi jep $\\cos x\\,dx$, që përputhet me numëruesin.',
                  calculation: 'u=4+\\sin x,\\quad du=\\cos x\\,dx',
                },
                {
                  id: 's2',
                  title: 'Përfundoni',
                  why: 'Përsëri marrim një logaritëm.',
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
      title: 'Zbatime të Metodës së Zëvendësimit',
      description:
        'Zëvendësime më të vështira: plotësimi i katrorit, produkte trigonometrike dhe forma të ndërthurura.',
      exercises: '1.30–1.56',
      sections: [
        {
          id: 'advanced-sub',
          title: 'Plotësimi i katrorit dhe produktet trigonometrike',
          summary:
            'Përgatitni integrandën së pari, pastaj zëvendësoni që të shfaqen arcsin, arctan ose logaritme.',
          examples: [
            {
              id: 'ex-1-31',
              title: 'Plotësoni katrorin, pastaj zëvendësoni',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{dx}{x^{2}+2x+2}$.',
              goal: 'Rishkruani kuadratikën si shumë katrorësh, pastaj përdorni arktangjentin.',
              steps: [
                {
                  id: 's1',
                  title: 'Plotësoni katrorin',
                  why: 'Termi i mesëm $2x$ sugjeron $(x+1)^{2}$.',
                  calculation: 'x^{2}+2x+2 = (x+1)^{2}+1',
                },
                {
                  id: 's2',
                  title: 'Zëvendësoni $u=x+1$',
                  why: 'Integrali bëhet forma standarde e arktangjentit.',
                  calculation:
                    '\\int\\frac{du}{u^{2}+1} = \\arctan u + C = \\arctan(x+1)+C',
                },
              ],
            },
            {
              id: 'ex-1-47',
              title: 'Produkt në shumë për kosinuset',
              prompt: 'Llogaritni $\\displaystyle \\int \\cos 3x\\,\\cos 5x\\,dx$.',
              goal: 'Përdorni një identitet produkt-në-shumë, pastaj integroni term pas termi.',
              steps: [
                {
                  id: 's1',
                  title: 'Përdorni identitetin',
                  why: 'Produktet e kosinuseve bëhen shumë e kosinuseve të shumës dhe diferencës së këndeve.',
                  formula: '\\cos A\\cos B = \\tfrac12\\bigl(\\cos(A+B)+\\cos(A-B)\\bigr)',
                  calculation:
                    '\\cos 3x\\cos 5x = \\tfrac12\\bigl(\\cos 8x+\\cos(-2x)\\bigr) = \\tfrac12(\\cos 8x+\\cos 2x)',
                },
                {
                  id: 's2',
                  title: 'Integroni',
                  why: 'Çdo kosinus integrohet me një faktor konstant.',
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
              id: 'ex-1-57',
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
              id: 'ex-1-58',
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
              id: 'ex-1-60',
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
            {
              id: 'ex-1-61',
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
              id: 'ex-1-63',
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
