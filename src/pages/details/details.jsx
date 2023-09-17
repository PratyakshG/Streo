import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/detailsBanner";
import Cast from "./detailsBanner/cast/cast";

import "./details.scss";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const detail = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
      />
      <Cast
        data={credits?.cast}
        loading={creditsLoading}
      />
      <VideosSection
        data={data}
        loading={loading}
      />
      <Similar
        id={id}
        mediaType={mediaType}
      />
      <Recommendation
        id={id}
        mediaType={mediaType}
      />
    </div>
  );
};

export default detail;
