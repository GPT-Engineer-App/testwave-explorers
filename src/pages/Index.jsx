import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. 
          Known for their independence, agility, and affectionate nature, cats make wonderful companions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cat Characteristics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Excellent night vision</li>
                <li>Flexible bodies and sharp claws</li>
                <li>Keen sense of smell</li>
                <li>Independent nature</li>
                <li>Grooming experts</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Cat Breeds</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Maine Coon</li>
                <li>Persian</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
