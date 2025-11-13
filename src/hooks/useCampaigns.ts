import { sanity } from "@/lib/sanityClient";
import { useState, useEffect } from "react";


export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await sanity.fetch(`
          *[_type == "campaign"] | order(featured desc, title asc){
            _id,
            title,
            description,
            impact,
            image{
              asset->{_id,url}
            },
            featured,
            color,
            goal,
            learnMore,
            getInvolved
          }
        `);
        setCampaigns(data);
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return { campaigns, loading };
};
