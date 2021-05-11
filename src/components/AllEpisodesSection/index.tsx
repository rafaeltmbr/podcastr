import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IAllEpisodeSection } from "../../interfaces/section/IAllEpisodesSection";

import {
  Section,
  Title,
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableDataCell,
  PlayButton,
  TableDataTitle,
} from "./styles";

const tableColumns = ["podcast", "integrantes", "Data", "Duração"];

export const AllEpisodesSection: React.FC<IAllEpisodeSection> = ({ episodes, ...rest }) => {
  return (
    <Section {...rest}>
      <Title>Todos episódios</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell />
            {tableColumns.map((column) => (
              <TableHeadCell key={column}>{column}</TableHeadCell>
            ))}
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode) => (
            <TableRow key={episode.id}>
              <TableDataCell className="image">
                <Image
                  src={episode.thumbnail}
                  alt={episode.title}
                  width={120}
                  height={120}
                  objectFit="cover"
                />
              </TableDataCell>
              <TableDataTitle>
                <Link href={`/episodes/${episode.id}`}>{episode.title}</Link>
              </TableDataTitle>
              <TableDataCell>{episode.members}</TableDataCell>
              <TableDataCell className="date">{episode.publishedAt}</TableDataCell>
              <TableDataCell>{episode.durationString}</TableDataCell>
              <TableDataCell className="button">
                <PlayButton />
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};
