import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, Upload, ArrowLeft } from "lucide-react";

interface CreateBusinessCardProps {
  onSubmit?: (data: BusinessCardData) => void;
}

interface BusinessCardData {
  logo?: File;
  banner?: File;
  businessName: string;
  businessSlogan: string;
}

const CreateBusinessCard = ({
  onSubmit = () => {},
}: CreateBusinessCardProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<BusinessCardData>({
    businessName: "",
    businessSlogan: "",
  });

  const [previews, setPreviews] = React.useState({
    logo: "",
    banner: "",
  });

  const handleImageUpload =
    (type: "logo" | "banner") => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFormData((prev) => ({ ...prev, [type]: file }));
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews((prev) => ({ ...prev, [type]: reader.result as string }));
        };
        reader.readAsDataURL(file);
      }
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-[#f7fafc] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#1a365d] mb-2">
              Create Your Business Card
            </h1>
            <p className="text-gray-600">
              Fill out the fields below to get started.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#1a365d] mb-4">
                Media Upload
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Logo Upload */}
                <div>
                  <div className="mb-2">Logo</div>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white">
                    {previews.logo ? (
                      <div className="relative w-32 h-32 mb-4">
                        <img
                          src={previews.logo}
                          alt="Logo preview"
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                    ) : (
                      <ImagePlus className="w-12 h-12 text-gray-400 mb-4" />
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("logo-upload")?.click()
                      }
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Logo
                    </Button>
                    <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload("logo")}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Recommended: 400x400px
                    </p>
                  </div>
                </div>

                {/* Banner Upload */}
                <div>
                  <div className="mb-2">Banner</div>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white">
                    {previews.banner ? (
                      <div className="relative w-full h-32 mb-4">
                        <img
                          src={previews.banner}
                          alt="Banner preview"
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    ) : (
                      <ImagePlus className="w-12 h-12 text-gray-400 mb-4" />
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        document.getElementById("banner-upload")?.click()
                      }
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Banner
                    </Button>
                    <input
                      id="banner-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload("banner")}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Recommended: 1200x400px
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#1a365d] mb-4">
                Business Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="businessName" className="block mb-2">
                    Business Name
                  </label>
                  <Input
                    id="businessName"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        businessName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="businessSlogan" className="block mb-2">
                    Business Slogan
                  </label>
                  <Textarea
                    id="businessSlogan"
                    placeholder="Write a catchy slogan or short description"
                    value={formData.businessSlogan}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        businessSlogan: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#ff6b6b] hover:bg-[#ff5b5b] text-white px-8"
            >
              Create Business Card
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBusinessCard;
