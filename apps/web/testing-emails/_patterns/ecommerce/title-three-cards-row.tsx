import {
  Button,
  Row,
  Img,
  Section,
  Text,
} from "@react-email/components";
import { ResponsiveRow, ResponsiveColumn } from "@responsive-email/react-email";

export const title = "Title + three cards in a row";

export const titleThreeCardsRow = (
  /* start pattern code */
  <Section className="my-4">
    <Row>
      <Text className="m-0 text-xl font-semibold text-gray-900">
        Unleash Creativity
      </Text>
      <Text className="mt-2 text-base text-gray-500">
        Unleash your inner designer with our customizable furniture options,
        allowing you to create a space that reflects your unique vision
      </Text>
    </Row>
    <ResponsiveRow className="mt-4">
      <ResponsiveColumn align="center" className="pr-1 py-4">
        <Img
          className="w-full rounded-lg object-cover"
          height={180}
          src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
          Sleek study
        </Text>
        <Text className="m-0 mt-4 text-base text-gray-500">
          Minimalist design with ample workspace
        </Text>
        <Text className="m-0 mt-2 text-base font-semibold text-gray-900">
          $999.99
        </Text>
        <Button
          className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
          href="https://react.email"
        >
          Buy
        </Button>
      </ResponsiveColumn>
      <ResponsiveColumn align="center" className="px-1 py-4">
        <Img
          className="w-full rounded-lg object-cover"
          height={180}
          src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
          Sleek study
        </Text>
        <Text className="m-0 mt-4 text-base text-gray-500">
          Minimalist design with ample workspace
        </Text>
        <Text className="m-0 mt-2 text-base font-semibold text-gray-900">
          $999.99
        </Text>
        <Button
          className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
          href="https://react.email"
        >
          Buy
        </Button>
      </ResponsiveColumn>
      <ResponsiveColumn align="center" className="pl-1 py-4">
        <Img
          className="w-full rounded-lg object-cover"
          height={180}
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Text className="m-0 mt-6 text-xl font-semibold text-gray-900">
          Sleek study
        </Text>
        <Text className="m-0 mt-4 text-base text-gray-500">
          Minimalist design with ample workspace
        </Text>
        <Text className="m-0 mt-2 text-base font-semibold text-gray-900">
          $999.99
        </Text>
        <Button
          className="mt-4 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white"
          href="https://react.email"
        >
          Buy
        </Button>
      </ResponsiveColumn>
    </ResponsiveRow>
  </Section>
  /* end pattern code */
);

export default titleThreeCardsRow;
