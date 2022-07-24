import Reacr from 'react'
import { BenefitsConteiner, IntroConteiner } from './styles'

import introImg from '../../../../../assets/intro-img.png'

import { RegularTxt, TitleTxt } from '../../../../../components/Typography'
import { InfoWithIcon } from '../../../../../components/InfoWithIcon'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroConteiner>
      <IntroConteiner className="conteiner">
        <div className="left">
          <section>
            <TitleTxt size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </TitleTxt>
            <RegularTxt size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe o seu café onde estiver, a
              qualquer hora!
            </RegularTxt>
          </section>

          <BenefitsConteiner>
            <InfoWithIcon
              text="Compra simples e segura"
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              text="Embalagem Mantém o café intacto"
              icon={<Package weight="fill" />}
              iconBg={colors['base-label']}
            />
            <InfoWithIcon
              text="Entraga rápida e rastreada"
              icon={<Timer weight="fill" />}
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              text="O café chega fresquinho até você"
              icon={<Coffee weight="fill" />}
              iconBg={colors['brand-purple']}
            />
          </BenefitsConteiner>
        </div>

        <div className="rigth">
          <img src={introImg} alt="" />
        </div>
      </IntroConteiner>
    </IntroConteiner>
  )
}
