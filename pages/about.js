import Hero from 'components/hero'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import Accordion from 'components/accordion'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images-local/about.jpg'
import Meta from 'components/meta'

export default function About () {
  return (
    <Container>
      <Meta
        pagetitle='About' pageDesc='About development activities'
        pageImg={eyecatch.src} pageImgW={eyecatch.width} pageImgH={eyecatch.height}
      />

      <Hero
        title='About'
        subtitle='About development activities'
      />

      <figure>
        <Image
          src={eyecatch}
          alt=''
          sizes='(min-width:1152px) 1152px,100vw'
          style={{ width: '100%', height: 'auto' }}
          priority
          placeholder='blur'
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。３次元から２次元の造形、
              プログラミングやデザインなど、さまざまな技術を組み合わせることによって
              社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。
              新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。
              たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけではなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。
              毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを
              言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着がわいてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、
              いいものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>

            <h2>FAQ</h2>
            <Accordion heading='プログラミングのポイントについて'>
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、
                目標とゴールを決め、そこに向かって様々な課題を設定しながら、プログラムを作っていきます
              </p>
            </Accordion>
            <Accordion heading='プログラミングのポイントについて'>
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、
                目標とゴールを決め、そこに向かって様々な課題を設定しながら、プログラムを作っていきます
              </p>
            </Accordion>
            <Accordion heading='プログラミングのポイントについて'>
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、
                目標とゴールを決め、そこに向かって様々な課題を設定しながら、プログラムを作っていきます
              </p>
            </Accordion>

          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>

      </TwoColumn>

    </Container>
  )
}
