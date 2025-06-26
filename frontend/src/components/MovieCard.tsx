import { Card, CardBody, Image, CardFooter, Tooltip } from "@heroui/react";

import type { RecommendedMovies } from '../types'

const MovieCard = ({title, overview, poster_path, tagline, release_date }: RecommendedMovies) => {
  return (
    <Card className="py-4 max-w-[270px]" isPressable>
      <CardBody className="overflow-visible py-2 flex">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={poster_path}
          width={270}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col text-left items-start">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-tiny font-bold">{tagline}</p>
        <Tooltip content={
          <div className="px-1 py-2">
            <div className="text-small font-bold">Overview</div>
            <div className="text-tiny">{overview}</div>
          </div>
        } size="md">
          <p className="text-tiny truncate max-w-full">{overview}</p>
        </Tooltip>
        <small className="text-default-500">{release_date}</small>
      </CardFooter>
    </Card>
  )
}

export default MovieCard