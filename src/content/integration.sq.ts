import type { Course } from './types'

/**
 * Albanian (sq) placeholder Integration course.
 * Keep the same ids as the English module so routes stay stable when switching language.
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
      id: 'fundamentals',
      number: 1,
      title: 'Bazat e integrimit',
      description:
        'Nga antiderivatet te rregulla e fuqisë: krijoni intuitë për atë që kërkon një integral dhe si formulat bazë janë e kundërta e derivimit.',
      sections: [
        {
          id: 'antiderivatives',
          title: 'Antiderivatet dhe integrali i pacaktuar',
          summary:
            'Mësoni çfarë është një antiderivatë, pse shfaqet $+C$ dhe si shënimi i integralit të pacaktuar e përmbledh këtë ide.',
          examples: [
            {
              id: 'check-antiderivative',
              title: 'Kontrollimi i një antiderivateje me derivim',
              prompt:
                'Tregoni se $F(x) = x^3 - 4x$ është antiderivatë e $f(x) = 3x^2 - 4$.',
              goal: 'Verifikoni përkufizimin: $F\'(x) = f(x)$.',
              steps: [
                {
                  id: 's1',
                  title: 'Kujtoni përkufizimin',
                  why: 'Një antiderivatë e $f$ është çdo funksion $F$ derivati i të cilit është saktësisht $f$. Për ta kontrolluar, derivojmë $F$ dhe e krahasojmë me $f$.',
                  formula: "F'(x) = f(x)",
                },
                {
                  id: 's2',
                  title: 'Derivoni term pas termi',
                  why: 'Derivimi është linear, prandaj çdo term të $F$ mund ta derivojmë veçmas me rregullën e fuqisë.',
                  formula: '\\frac{d}{dx}\\bigl(x^n\\bigr) = n x^{n-1}',
                  calculation: "F'(x) = 3x^{2} - 4",
                },
                {
                  id: 's3',
                  title: 'Krahasoni me $f$',
                  why: 'Nëse derivati përputhet me funksionin e dhënë $f$, atëherë $F$ është vërtet një antiderivatë.',
                  calculation: "F'(x) = 3x^{2} - 4 = f(x)",
                  notes:
                    'Çdo antiderivatë tjetër ndryshon nga $F$ me një konstante. Prandaj te integralet e pacaktuara shkruajmë $+C$.',
                },
              ],
            },
            {
              id: 'indefinite-power',
              title: 'Integrali i pacaktuar i një fuqie të thjeshtë',
              prompt: 'Llogaritni $\\displaystyle \\int 6x^{2}\\,dx$.',
              goal: 'Përdorni rregullën e fuqisë për antiderivatet dhe përfshini $+C$.',
              steps: [
                {
                  id: 's1',
                  title: 'Nxirrni konstanten jashtë',
                  why: 'Konstantet dalin jashtë integralit. Kështu thjeshtohet fuqia që duhet të integrojmë.',
                  formula: '\\int c\\,g(x)\\,dx = c\\int g(x)\\,dx',
                  calculation: '\\int 6x^{2}\\,dx = 6\\int x^{2}\\,dx',
                },
                {
                  id: 's2',
                  title: 'Përdorni rregullën e fuqisë',
                  why: 'Integrimi i $x^n$ e rrit eksponentin me një dhe e pjesëton me eksponentin e ri — e kundërta e derivimit.',
                  formula: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C \\quad (n\\neq -1)',
                  calculation: '6\\int x^{2}\\,dx = 6\\cdot\\frac{x^{3}}{3}+C = 2x^{3}+C',
                },
                {
                  id: 's3',
                  title: 'Shkruani përgjigjen',
                  why: 'Te një integral i pacaktuar gjithmonë shtoni $+C$: ka pafundësisht shumë antiderivata që ndryshojnë me një konstante.',
                  calculation: '\\int 6x^{2}\\,dx = 2x^{3}+C',
                },
              ],
            },
            {
              id: 'family-plus-c',
              title: 'Pse $+C$ përshkruan një familje të tërë',
              prompt:
                'Shpjegoni pse $\\displaystyle \\int 2x\\,dx = x^{2}+C$, dhe jepni dy antiderivata të ndryshme të $2x$.',
              goal: 'Lidhni konstanten e integrimit me një familje grafikësh paralelë.',
              steps: [
                {
                  id: 's1',
                  title: 'Gjeni një antiderivatë',
                  why: 'Filloni me çdo funksion derivati i të cilit është $2x$. Rregulla e fuqisë jep $x^2$.',
                  calculation: '\\frac{d}{dx}\\bigl(x^{2}\\bigr) = 2x',
                },
                {
                  id: 's2',
                  title: 'Shtoni një konstante të çfarëdoshme',
                  why: 'Derivati i një konstante është zero, prandaj edhe $x^2+5$ dhe $x^2-3$ janë antiderivata.',
                  calculation:
                    '\\frac{d}{dx}\\bigl(x^{2}+5\\bigr)=2x,\\quad \\frac{d}{dx}\\bigl(x^{2}-3\\bigr)=2x',
                },
                {
                  id: 's3',
                  title: 'Shkruani familjen në mënyrë kompakte',
                  why: 'Shënimi $+C$ i përmbledh të gjitha zhvendosjet vertikale të grafikut në një shprehje.',
                  formula: '\\int 2x\\,dx = x^{2}+C',
                  notes: 'Dy shembuj konkretë: $x^{2}+5$ dhe $x^{2}-3$.',
                },
              ],
            },
          ],
        },
        {
          id: 'power-rule',
          title: 'Rregulla e fuqisë dhe shumëzimi me konstante',
          summary:
            'Praktikoni formulat kryesore për polinomet dhe fuqitë e thjeshta para se të kaloni te teknikat.',
          examples: [
            {
              id: 'poly-indefinite',
              title: 'Integrimi i një polinomi term pas termi',
              prompt: 'Llogaritni $\\displaystyle \\int \\bigl(4x^{3}-3x+7\\bigr)\\,dx$.',
              goal: 'Përdorni linearitetin dhe rregullën e fuqisë për çdo term.',
              steps: [
                {
                  id: 's1',
                  title: 'Ndani integralin',
                  why: 'Integrali i një shume është shuma e integraleve, prandaj secili term trajtohet me rregullën e fuqisë.',
                  formula: '\\int\\bigl(f+g\\bigr)=\\int f+\\int g',
                  calculation:
                    '\\int(4x^{3}-3x+7)\\,dx = \\int 4x^{3}\\,dx - \\int 3x\\,dx + \\int 7\\,dx',
                },
                {
                  id: 's2',
                  title: 'Integroni çdo pjesë',
                  why: 'Përdorni $\\int x^n = \\frac{x^{n+1}}{n+1}$ (dhe $\\int k = kx$) me kujdes për çdo term.',
                  calculation:
                    '4\\cdot\\frac{x^{4}}{4} - 3\\cdot\\frac{x^{2}}{2} + 7x + C = x^{4} - \\frac{3}{2}x^{2} + 7x + C',
                },
                {
                  id: 's3',
                  title: 'Shkruani antiderivatën përfundimtare',
                  why: 'Bashkojini në një shprehje të vetme me një $+C$ të përbashkët.',
                  calculation: '\\int(4x^{3}-3x+7)\\,dx = x^{4}-\\tfrac{3}{2}x^{2}+7x+C',
                },
              ],
            },
            {
              id: 'negative-exponent',
              title: 'Një fuqi negative (por jo $-1$)',
              prompt: 'Llogaritni $\\displaystyle \\int \\frac{1}{x^{3}}\\,dx$.',
              goal: 'Rishkruajeni si $x^{-3}$ dhe përdorni rregullën e fuqisë.',
              steps: [
                {
                  id: 's1',
                  title: 'Rishkruajeni me eksponent negativ',
                  why: 'Rregulla e fuqisë aplikohet më lehtë kur funksioni nën integral shkruhet si $x^n$.',
                  calculation: '\\frac{1}{x^{3}} = x^{-3}',
                },
                {
                  id: 's2',
                  title: 'Rritni eksponentin dhe pjesëtoni',
                  why: 'Këtu $n=-3\\neq -1$, prandaj rregulla e zakonshme e fuqisë vlen ende.',
                  formula: '\\int x^{n}\\,dx = \\frac{x^{n+1}}{n+1}+C',
                  calculation: '\\int x^{-3}\\,dx = \\frac{x^{-2}}{-2}+C = -\\frac{1}{2x^{2}}+C',
                },
                {
                  id: 's3',
                  title: 'Kontroll opsional me derivim',
                  why: 'Nëse e derivojmë përgjigjen, duhet të rikthejmë funksionin fillestar nën integral.',
                  calculation:
                    "\\frac{d}{dx}\\Bigl(-\\frac{1}{2}x^{-2}\\Bigr) = -\\frac{1}{2}\\cdot(-2)x^{-3} = x^{-3} = \\frac{1}{x^{3}}",
                },
              ],
            },
            {
              id: 'root-as-power',
              title: 'Integrimi i një rrënje katrore',
              prompt: 'Llogaritni $\\displaystyle \\int \\sqrt{x}\\,dx$.',
              goal: 'Shkruajeni rrënjën si fuqi me thyesë, pastaj integroni.',
              steps: [
                {
                  id: 's1',
                  title: 'Shndërroni radikalin',
                  why: 'Rrënjët janë eksponentë me thyesë; shkrimi $\\sqrt{x}=x^{1/2}$ hap rrugën për rregullën e fuqisë.',
                  calculation: '\\sqrt{x} = x^{1/2}',
                },
                {
                  id: 's2',
                  title: 'Përdorni rregullën e fuqisë',
                  why: 'Shtoni një te eksponenti: $\\tfrac12+1=\\tfrac32$, pastaj pjesëtoni me $\\tfrac32$.',
                  calculation:
                    '\\int x^{1/2}\\,dx = \\frac{x^{3/2}}{3/2}+C = \\frac{2}{3}x^{3/2}+C',
                },
                {
                  id: 's3',
                  title: 'Rishkruajeni nëse dëshironi',
                  why: 'Disa tekste preferojnë shënimin me radikal në përgjigjen përfundimtare.',
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
      title: 'Teknikat e para',
      description:
        'Dy metoda standarde që hapin shumë ushtrime tipike: zëvendësimi dhe integrimi me pjesë.',
      sections: [
        {
          id: 'substitution',
          title: 'Zëvendësimi ($u$-zëvendësim)',
          summary:
            'Njohni një kompozim ku shfaqet derivati i funksionit të brendshëm (deri në një konstante), pastaj ndërroni ndryshoren.',
          examples: [
            {
              id: 'basic-usub',
              title: 'E kundërta klasike e rregullës së zinxhirit',
              prompt: 'Llogaritni $\\displaystyle \\int 2x\\,(x^{2}+1)^{5}\\,dx$.',
              goal: 'Zgjidhni $u$ në mënyrë që $du$ të përputhet me faktorin e mbetur.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni funksionin e brendshëm',
                  why: 'Faktori $(x^{2}+1)^{5}$ duket si kompozim. Le të jetë funksioni i brendshëm $u$.',
                  calculation: 'u = x^{2}+1',
                },
                {
                  id: 's2',
                  title: 'Llogaritni $du$',
                  why: 'Derivimi i $u$ jep $2x\\,dx$, që tashmë shfaqet nën integral — përputhje e plotë.',
                  calculation: 'du = 2x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Rishkruani dhe integroni në $u$',
                  why: 'Pas zëvendësimit, integrali bëhet një fuqi e thjeshtë e $u$.',
                  calculation: '\\int u^{5}\\,du = \\frac{u^{6}}{6}+C',
                },
                {
                  id: 's4',
                  title: 'Kthehuni te $x$',
                  why: 'Përgjigjet e integralit të pacaktuar duhet të shprehen me ndryshoren fillestare.',
                  calculation: '\\frac{(x^{2}+1)^{6}}{6}+C',
                },
              ],
            },
            {
              id: 'usub-constant-adjust',
              title: 'Rregullimi për një faktor konstant',
              prompt: 'Llogaritni $\\displaystyle \\int x\\,e^{x^{2}}\\,dx$.',
              goal: 'Vendosni $u=x^{2}$ dhe merrni parasysh faktorin $2$ që mungon.',
              steps: [
                {
                  id: 's1',
                  title: 'Vendosni $u$ dhe gjeni $du$',
                  why: 'Eksponenti $x^{2}$ është zgjedhje natyrore për $u$, sepse derivati i tij lidhet me faktorin $x\\,dx$.',
                  calculation: 'u=x^{2},\\quad du=2x\\,dx \\implies x\\,dx=\\tfrac{1}{2}du',
                },
                {
                  id: 's2',
                  title: 'Zëvendësoni',
                  why: 'Zëvendësoni edhe funksionin eksponencial edhe diferencialin, që integrali të jetë vetëm me $u$.',
                  calculation: '\\int e^{u}\\cdot\\tfrac{1}{2}\\,du = \\tfrac{1}{2}\\int e^{u}\\,du',
                },
                {
                  id: 's3',
                  title: 'Integroni funksionin eksponencial',
                  why: 'Antiderivata e $e^u$ është vetë $e^u$.',
                  calculation: '\\tfrac{1}{2}e^{u}+C = \\tfrac{1}{2}e^{x^{2}}+C',
                },
              ],
            },
          ],
        },
        {
          id: 'parts',
          title: 'Integrimi me pjesë',
          summary:
            'Zhbëni rregullën e produktit: zgjidhni $u$ dhe $dv$, pastaj përdorni $\\int u\\,dv = uv - \\int v\\,du$.',
          examples: [
            {
              id: 'parts-xex',
              title: 'Integrimi i $x e^{x}$',
              prompt: 'Llogaritni $\\displaystyle \\int x e^{x}\\,dx$.',
              goal: 'Përdorni integrimin me pjesë për produktin e një polinomi me një funksion eksponencial.',
              steps: [
                {
                  id: 's1',
                  title: 'Kujtoni formulën',
                  why: 'Integrimi me pjesë vjen nga rregulla e produktit, e rishkruar në formë integrale.',
                  formula: '\\int u\\,dv = uv - \\int v\\,du',
                },
                {
                  id: 's2',
                  title: 'Zgjidhni $u$ dhe $dv$',
                  why: 'Le të jetë $u=x$ (thjeshtohet kur derivohet) dhe $dv=e^{x}\\,dx$ (integrohet lehtë).',
                  calculation: 'u=x,\\quad dv=e^{x}\\,dx \\implies du=dx,\\quad v=e^{x}',
                },
                {
                  id: 's3',
                  title: 'Përdorni formulën',
                  why: 'Zëvendësoni në $uv-\\int v\\,du$ dhe integroni integralin e mbetur, që është më i thjeshtë.',
                  calculation: '\\int x e^{x}\\,dx = x e^{x} - \\int e^{x}\\,dx = x e^{x} - e^{x}+C',
                },
                {
                  id: 's4',
                  title: 'Faktorizoni nëse dëshironi',
                  why: 'Faktorizimi i $e^{x}$ e bën strukturën më të lehtë për ta kontrolluar me derivim.',
                  calculation: 'e^{x}(x-1)+C',
                },
              ],
            },
            {
              id: 'parts-xsin',
              title: 'Integrimi i $x\\sin x$',
              prompt: 'Llogaritni $\\displaystyle \\int x\\sin x\\,dx$.',
              goal: 'Praktikoni integrimin me pjesë kur faktori trigonometrik integrohet lehtë.',
              steps: [
                {
                  id: 's1',
                  title: 'Zgjidhni pjesët',
                  why: 'Përsëri le të jetë faktori algjebrik $u$, që derivimi të ulë shkallën e polinomit.',
                  calculation: 'u=x,\\quad dv=\\sin x\\,dx \\implies du=dx,\\quad v=-\\cos x',
                },
                {
                  id: 's2',
                  title: 'Përdorni $\\int u\\,dv$',
                  why: 'Formula jep një term produkti minus një integral të ri të kosinusit.',
                  calculation:
                    '\\int x\\sin x\\,dx = -x\\cos x - \\int(-\\cos x)\\,dx = -x\\cos x + \\int\\cos x\\,dx',
                },
                {
                  id: 's3',
                  title: 'Përfundoni integralin e kosinusit',
                  why: 'Integrali i mbetur është standard: $\\int\\cos x\\,dx=\\sin x$.',
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
