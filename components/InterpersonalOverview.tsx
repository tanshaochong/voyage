import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const InterpersonalOverview = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Based on your feedbacks</CardTitle>
        <CardDescription>
          Here are what your colleagues have to say about you
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          dignissimos tenetur quibusdam, fugit, excepturi maxime deleniti nisi a
          ipsum natus nulla autem veniam libero quaerat voluptas esse tempore
          iusto voluptates? Dolorum neque, tempore inventore maxime officiis
          veniam optio reiciendis iure explicabo iste recusandae maiores
          molestias hic quo cum totam voluptatum magni eaque qui magnam nemo
          quam sequi nisi facere! Quaerat. Similique, distinctio sed in odit
          quibusdam praesentium? Alias quae tempore accusantium velit ea eveniet
          maiores blanditiis, odit debitis dolorum sit incidunt praesentium?
          Esse recusandae, sit tenetur illo et aliquam perspiciatis? Ut
          incidunt, atque tempore, magnam maxime quasi, fugiat sequi perferendis
          saepe ab molestias. Minus eveniet asperiores repellat nihil debitis,
          laborum voluptatum, dolor consequatur itaque, ab fuga qui blanditiis
          veritatis quod! Repudiandae nobis aperiam fugit praesentium? Aliquam
          deserunt sint omnis quaerat magnam dicta ratione ipsam odit fuga
          voluptatem natus debitis odio esse laborum atque consequuntur,
          corporis officia modi? Facilis, vel tenetur! Cupiditate tempore
          provident sunt, culpa reiciendis repellat, odit magnam ducimus qui
          ipsam dignissimos excepturi impedit modi id, debitis dolore error
          voluptatem optio eius perferendis et laborum officia ratione! Nihil,
          soluta? Earum sapiente provident nostrum quam ab veniam obcaecati
          delectus assumenda eum quod, eius, hic aliquid. Animi, dicta. Magni,
          nesciunt, itaque vero omnis, dolorum quas perferendis placeat
          reprehenderit numquam doloribus dolore. Vel cum ipsum consectetur sed
          ea autem inventore in, ab voluptatibus, nobis earum est praesentium
          quidem necessitatibus beatae placeat, expedita excepturi dolore sit
          enim rem error? Cupiditate obcaecati nihil quis! Veritatis sapiente
          reiciendis pariatur adipisci, perspiciatis beatae, natus corrupti
          aliquid ea vitae nesciunt quasi quae perferendis nemo? Maiores
          incidunt voluptates atque dolorum doloribus ex odio? Reiciendis
          quibusdam qui a laborum. Et dolorum non officiis harum tenetur sunt
          dolorem excepturi. Saepe ad quam repudiandae? Magnam, nam. Aliquam,
          eius sunt? Amet nesciunt magni distinctio magnam molestiae praesentium
          saepe explicabo laudantium nemo laboriosam.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground ml-auto w-[200px] italic text-right mr-4">
          Find out how you can improve these soft skills
        </p>
        <Link
          href="/interpersonal"
          className={cn(buttonVariants({ variant: 'default' }))}
        >
          Tell me more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InterpersonalOverview;
