import {FC} from "react";

import {TTableProps} from "../../../types.ts";
import s from './style.module.css'
import DirectionSchevrone from "../../../../assets/icons/directionSchevrone.tsx";
import {Status, StatusColor, TDirections, TestKeys} from "../../../../shared/types.ts";
import Button from "../../../../shared/components/button/Button.tsx";

const TableComponent: FC<TTableProps> = ({onSort, sortedData, sortConfig}) => {
    const headers = ["name", "type", "status", "site", "action"]
    console.log(sortConfig)
    return (
        <div className={s.tableСontainer}>
            <table className={s.customTable}>
                <thead>
                <tr>
                    {headers.map((header) => (
                        <th
                            key={header}
                            onClick={() => header === "type" && onSort(header as TestKeys)}
                        >
                            <div className={s.cell}>
                                {header !== "action" && header}
                                {header === "type" && (
                                    <div
                                        className={`sort-arrow ${sortConfig?.direction === TDirections.ASC ? s.up : s.down}`}>
                                        <DirectionSchevrone/>
                                    </div>
                                )
                                }
                            </div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {sortedData?.map(({id, name, type, status, siteUrl}) => (
                    <tr key={id}>
                        <td style={{borderLeft: `3px solid ${StatusColor[status]}`}}>{name}</td>
                        <td>{type}</td>
                        <td style={{color: StatusColor[status]}}>{status}</td>
                        <td>{siteUrl}</td>
                        <td>
                            <Button
                                title={status === Status.DRAFT ? 'Finalize' : 'Results'}
                                variant={status === Status.DRAFT ? 'default' : 'success'}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent